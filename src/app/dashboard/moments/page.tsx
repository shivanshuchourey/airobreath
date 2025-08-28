
"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Camera, Heart, Loader2, Send, Video, VideoOff } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { generateMomentTitle } from "@/ai/flows/generate-moment-title";

const stories = [
    { title: "Fun time in the park!", time: "2h ago", image: "https://picsum.photos/300/500" },
    { title: "Learning to draw", time: "5h ago", image: "https://picsum.photos/300/500" },
    { title: "First day of school", time: "1d ago", image: "https://picsum.photos/300/500" },
];

export default function MomentsPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recordedVideo, setRecordedVideo] = useState<string | null>(null);
    const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [generatedTitle, setGeneratedTitle] = useState("");
    const { toast } = useToast();

    useEffect(() => {
        const getCameraPermission = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setHasCameraPermission(true);

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error("Error accessing camera:", error);
            setHasCameraPermission(false);
            toast({
                variant: "destructive",
                title: "Camera Access Denied",
                description: "Please enable camera permissions in your browser settings to use this feature.",
            });
        }
        };

        getCameraPermission();
    }, [toast]);

    const handleStartRecording = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            mediaRecorderRef.current = new MediaRecorder(stream);
            const chunks: Blob[] = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                chunks.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunks, { type: 'video/webm' });
                setVideoBlob(blob);
                const url = URL.createObjectURL(blob);
                setRecordedVideo(url);
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);

            setTimeout(() => {
                handleStopRecording();
            }, 10000);
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const handlePostStory = async () => {
        if (!videoBlob) return;
        setIsLoading(true);
        try {
            const reader = new FileReader();
            reader.readAsDataURL(videoBlob);
            reader.onloadend = async () => {
                const videoDataUri = reader.result as string;
                const result = await generateMomentTitle({ videoDataUri });
                setGeneratedTitle(result.title);

                // Here you would typically save the story to a backend
                console.log("Posting story with title:", result.title);
                toast({
                    title: "Story Posted!",
                    description: "Your moment has been shared.",
                });
                setRecordedVideo(null);
                setVideoBlob(null);
            }
        } catch (error) {
            console.error("Error generating title or posting story:", error);
            toast({
                title: "Failed to Post Story",
                description: "Something went wrong. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleRetake = () => {
        setRecordedVideo(null);
        setVideoBlob(null);
        setGeneratedTitle("");
    }

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                <Heart className="h-8 w-8" />
                Child's Moments
                </h1>
                <p className="text-muted-foreground">
                Capture and share your child's precious moments.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Capture a Moment</CardTitle>
                            <CardDescription>Record a short 5-10 second video of your child.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-[9/16] w-full max-w-md mx-auto bg-slate-900 rounded-lg overflow-hidden relative">
                                {recordedVideo ? (
                                    <video src={recordedVideo} className="w-full h-full object-cover" controls autoPlay loop />
                                ) : (
                                    <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
                                )}
                                {!hasCameraPermission && !recordedVideo && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
                                        <VideoOff className="h-12 w-12 mb-4" />
                                        <p>Camera access is required</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center gap-4">
                            {recordedVideo ? (
                                <>
                                    <Button onClick={handleRetake} variant="outline" disabled={isLoading}>
                                        <Camera className="mr-2" /> Retake
                                    </Button>
                                    <Button onClick={handlePostStory} disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 animate-spin" /> Posting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2" /> Post Story
                                            </>
                                        )}
                                    </Button>
                                </>
                            ) : (
                                <Button onClick={isRecording ? handleStopRecording : handleStartRecording} disabled={!hasCameraPermission} size="lg">
                                    {isRecording ? (
                                        <>
                                            <VideoOff className="mr-2" /> Stop Recording
                                        </>
                                    ) : (
                                        <>
                                            <Video className="mr-2" /> Start Recording
                                        </>
                                    )}
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                </div>
                
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Stories</CardTitle>
                            <CardDescription>Watch previously posted moments.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           {stories.map(story => (
                               <div key={story.title} className="flex items-center gap-4 p-2 rounded-lg hover:bg-secondary/50">
                                   <div className="w-16 h-24 rounded-md overflow-hidden ring-2 ring-pink-400 ring-offset-2 ring-offset-background">
                                        <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                                   </div>
                                   <div>
                                       <p className="font-semibold">{story.title}</p>
                                       <p className="text-xs text-muted-foreground">{story.time}</p>
                                   </div>
                               </div>
                           ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
