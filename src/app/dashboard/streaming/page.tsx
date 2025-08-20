import Image from "next/image";
import { Camera, Maximize, Mic, MonitorSpeaker, Users, Video } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function StreamingPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Live Classroom Stream
        </h1>
        <p className="text-muted-foreground">
          Real-time view of Grade 4 - Section B.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <CardHeader className="flex-row items-center justify-between">
               <div>
                  <CardTitle>Teacher View</CardTitle>
                  <CardDescription>Main camera focused on the teacher.</CardDescription>
                </div>
                <Badge variant="destructive" className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
                  LIVE
                </Badge>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full bg-slate-900 rounded-lg overflow-hidden relative">
                <Image
                  src="https://placehold.co/1280x720.png"
                  alt="Live stream from classroom"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="classroom teacher"
                />
                 <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <Button size="icon" variant="secondary">
                      <Maximize className="h-5 w-5" />
                    </Button>
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden">
             <CardHeader>
                  <CardTitle className="text-base">Student View</CardTitle>
             </CardHeader>
            <CardContent>
              <div className="aspect-video w-full bg-slate-800 rounded-lg overflow-hidden">
                 <Image
                  src="https://placehold.co/600x400.png"
                  alt="Live stream of students"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint="classroom students"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Camera Controls</CardTitle>
              <CardDescription>Switch between available camera views.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
              <Button variant="secondary" className="flex gap-2 items-center">
                <Camera className="h-4 w-4" />
                <span>Teacher</span>
              </Button>
               <Button variant="outline" className="flex gap-2 items-center">
                <Users className="h-4 w-4" />
                <span>Students</span>
              </Button>
              <Button variant="outline" className="flex gap-2 items-center">
                <MonitorSpeaker className="h-4 w-4" />
                <span>Whiteboard</span>
              </Button>
              <Button variant="outline" className="flex gap-2 items-center">
                <Video className="h-4 w-4" />
                <span>Podium</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
