import Image from "next/image";
import { Gamepad2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const games = [
    { title: "Math Blaster", description: "Practice your math skills while saving the galaxy!", image: "https://picsum.photos/600/400", aiHint: "space game" },
    { title: "Word Finder", description: "A fun word search game to expand your vocabulary.", image: "https://picsum.photos/600/400", aiHint: "puzzle game" },
    { title: "Geography Quiz", description: "Test your knowledge of countries and capitals.", image: "https://picsum.photos/600/400", aiHint: "world map" },
]

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Gamepad2 className="h-8 w-8" />
          Educational Games
        </h1>
        <p className="text-muted-foreground">
          Fun and interactive games to make learning enjoyable.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Game Zone</CardTitle>
          <CardDescription>
            This section is under construction. Exciting games are coming soon!
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <Card key={game.title} className="overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={600}
                  height={400}
                  className="w-full h-40 object-cover"
                  data-ai-hint={game.aiHint}
                />
                <CardHeader>
                  <CardTitle>{game.title}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button disabled>Coming Soon</Button>
                </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
