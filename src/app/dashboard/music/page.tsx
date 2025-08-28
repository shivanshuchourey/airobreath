import Image from "next/image";
import { Music, Guitar, Mic2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const academies = [
  {
    name: "Harmony Music School",
    specialty: "Piano, guitar, and vocal lessons for all levels.",
    image: "https://picsum.photos/600/400",
    aiHint: "music notes"
  },
  {
    name: "Rhythm & Beats Drumming",
    specialty: "Find your rhythm with our drumming classes.",
    image: "https://picsum.photos/600/400",
    aiHint: "drum set"
  },
  {
    name: "The Strings Connection",
    specialty: "Violin, cello, and orchestra programs.",
    image: "https://picsum.photos/600/400",
    aiHint: "violin instrument"
  },
];

export default function MusicPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Music className="h-8 w-8" />
          Music Academies
        </h1>
        <p className="text-muted-foreground">
          Discover the world of music with our talented instructors.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {academies.map((academy) => (
          <Card key={academy.name} className="flex flex-col overflow-hidden">
            <Image
              src={academy.image}
              alt={academy.name}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
              data-ai-hint={academy.aiHint}
            />
            <CardHeader>
              <CardTitle>{academy.name}</CardTitle>
              <CardDescription>{academy.specialty}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <Button>View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
