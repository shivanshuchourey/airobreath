import Image from "next/image";
import { Trophy, Futbol, Target, Medal, Dumbbell, Swimmer, Waves, PersonStanding } from "lucide-react";
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
    name: "Elite Soccer Academy",
    specialty: "Professional soccer training for all ages.",
    image: "https://picsum.photos/seed/soccer/600/400",
    aiHint: "soccer field"
  },
  {
    name: "Hoops Dynasty Basketball",
    specialty: "Dribbling, shooting, and team play skills.",
    image: "https://picsum.photos/seed/basketball/600/400",
    aiHint: "basketball court"
  },
  {
    name: "Grand Slam Tennis Club",
    specialty: "From beginners to advanced tennis players.",
    image: "https://picsum.photos/seed/tennis/600/400",
    aiHint: "tennis court"
  },
  {
    name: "Aqua Warriors Swim School",
    specialty: "Competitive swimming and water safety.",
    image: "https://picsum.photos/seed/swimming/600/400",
    aiHint: "swimming pool"
  },
  {
    name: "Flip & Fly Gymnastics",
    specialty: "Artistic and rhythmic gymnastics programs.",
    image: "https://picsum.photos/seed/gymnastics/600/400",
    aiHint: "gymnast balance"
  },
  {
    name: "Speedsters Track Club",
    specialty: "Sprinting, long distance, and field events.",
    image: "https://picsum.photos/seed/track/600/400",
    aiHint: "running track"
  },
  {
    name: "Dragon Fist Martial Arts",
    specialty: "Discipline and skill in Karate, Judo, and Taekwondo.",
    image: "https://picsum.photos/seed/martialarts/600/400",
    aiHint: "karate kick"
  },
  {
    name: "Home Run Baseball League",
    specialty: "Batting, pitching, and fielding for young athletes.",
    image: "https://picsum.photos/seed/baseball/600/400",
    aiHint: "baseball game"
  },
  {
    name: "Spike City Volleyball",
    specialty: "Learn to serve, set, and spike like a pro.",
    image: "https://picsum.photos/seed/volleyball/600/400",
    aiHint: "volleyball net"
  },
];

export default function SportsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Trophy className="h-8 w-8" />
          Sports Academies
        </h1>
        <p className="text-muted-foreground">
          Find the perfect sports program for your child.
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
