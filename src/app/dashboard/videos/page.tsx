import Image from "next/image";
import { PlaySquare, Download, Share2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const videos = [
    { title: "The Magic of Photosynthesis", description: "Learn how plants make their own food in this animated adventure.", image: "https://picsum.photos/600/400", aiHint: "plants cartoon" },
    { title: "Counting with Dinosaurs", description: "Join our dino friends as they learn to count from 1 to 20.", image: "https://picsum.photos/600/400", aiHint: "cartoon dinosaur" },
    { title: "A Trip to the Solar System", description: "Explore the planets and learn fun facts about our solar system.", image: "https://picsum.photos/600/400", aiHint: "solar system" },
    { title: "The ABC Song", description: "A classic song to help you learn the alphabet with ease.", image: "https://picsum.photos/600/400", aiHint: "alphabet blocks" },
];

export default function VideosPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <PlaySquare className="h-8 w-8" />
          Educational Videos
        </h1>
        <p className="text-muted-foreground">
          Engaging videos to help with learning and development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card key={video.title} className="flex flex-col">
            <CardHeader>
              <div className="aspect-video w-full bg-slate-100 rounded-lg overflow-hidden relative">
                <Image
                  src={video.image}
                  alt={video.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={video.aiHint}
                />
                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button variant="secondary" size="icon" className="h-14 w-14 rounded-full">
                        <PlaySquare className="h-8 w-8" />
                    </Button>
                 </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="text-lg">{video.title}</CardTitle>
              <CardDescription className="mt-1">{video.description}</CardDescription>
            </CardContent>
            <CardContent className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4"/>
                    Download
                </Button>
                 <Button variant="ghost" size="sm">
                    <Share2 className="mr-2 h-4 w-4"/>
                    Share
                </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
