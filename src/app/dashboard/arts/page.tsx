import Image from "next/image";
import { Paintbrush, Palette, PenTool } from "lucide-react";
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
    name: "Creative Canvas Studio",
    specialty: "Painting, drawing, and mixed media classes.",
    image: "https://picsum.photos/600/400",
    aiHint: "art studio"
  },
  {
    name: "Clay & Pottery Workshop",
    specialty: "Learn the art of pottery and sculpting.",
    image: "https://picsum.photos/600/400",
    aiHint: "pottery wheel"
  },
  {
    name: "Digital Dreamers",
    specialty: "Digital art and animation for young creators.",
    image: "https://picsum.photos/600/400",
    aiHint: "digital art"
  },
];

export default function ArtsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Paintbrush className="h-8 w-8" />
          Arts & Crafts Academies
        </h1>
        <p className="text-muted-foreground">
          Unleash your child's creativity with our art programs.
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
