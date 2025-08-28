import Image from "next/image";
import { PlaySquare, Youtube } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const videos = [
    { title: "The Magic of Photosynthesis", description: "Learn how plants make their own food!", image: "https://picsum.photos/600/400", aiHint: "green leaves", channel: "Science for Kids" },
    { title: "Counting to 100 Adventure", description: "A fun song to help you count all the way to 100.", image: "https://picsum.photos/600/400", aiHint: "colorful numbers", channel: "Math Mania" },
    { title: "Drawing a Friendly Dinosaur", description: "Follow along and draw your very own T-Rex.", image: "https://picsum.photos/600/400", aiHint: "dinosaur drawing", channel: "Art Club" },
    { title: "The Solar System for Beginners", description: "Explore the planets in our amazing solar system.", image: "https://picsum.photos/600/400", aiHint: "planets space", channel: "Cosmic Kids" },
    { title: "Why Do We Dream?", description: "Discover the secrets behind your dreams.", image: "https://picsum.photos/600/400", aiHint: "sleeping cloud", channel: "Curiosity Corner" },
    { title: "Animal Sounds Safari", description: "Learn the sounds that different animals make.", image: "https://picsum.photos/600/400", aiHint: "jungle animals", channel: "Wild Wonders" },
]

export default function VideosPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <PlaySquare className="h-8 w-8" />
          Educational Videos
        </h1>
        <p className="text-muted-foreground">
          A curated library of fun and educational videos for your child.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Video Library</CardTitle>
          <CardDescription>
            Browse through the available videos below.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <Card key={video.title} className="overflow-hidden group">
                <div className="aspect-video w-full bg-slate-100 rounded-lg overflow-hidden relative">
                    <Image
                      src={video.image}
                      alt={video.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      data-ai-hint={video.aiHint}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Button variant="secondary" size="icon" className="h-14 w-14 rounded-full">
                            <PlaySquare className="h-8 w-8 text-foreground" />
                        </Button>
                    </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription className="h-10">{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Youtube className="h-5 w-5 text-red-500" />
                        <span>{video.channel}</span>
                    </div>
                </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
