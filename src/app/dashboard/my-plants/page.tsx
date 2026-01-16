'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Droplet, Sun, Leaf } from 'lucide-react';
import { plants } from '@/lib/plant-data';

function getHealthBadgeVariant(health: string) {
  switch (health) {
    case 'Healthy':
      return 'default';
    case 'Needs Water':
      return 'secondary';
    case 'Needs Nutrients':
      return 'destructive';
    default:
      return 'outline';
  }
}

export default function MyPlantsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Plants</h1>
          <p className="text-muted-foreground">
            Manage and monitor the plants in your Airobreath tower.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Plant
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plants.map((plant) => (
          <Card key={plant.id} className="flex flex-col overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={`https://picsum.photos/seed/${plant.image.seed}/${plant.image.width}/${plant.image.height}`}
                alt={plant.name}
                fill
                data-ai-hint={plant.image.hint}
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{plant.name}</CardTitle>
              <CardDescription className="italic">
                {plant.species}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow gap-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Leaf className="h-4 w-4 text-primary" />
                  <span>{plant.stage}</span>
                </div>
                <Badge variant="outline">{plant.daysOld} days old</Badge>
              </div>

              <div className="flex justify-between items-center">
                <Badge variant={getHealthBadgeVariant(plant.health)}>
                  {plant.health}
                </Badge>
              </div>

              <div className="mt-auto flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="w-full">
                  <Droplet className="h-4 w-4" />
                  <span>Water</span>
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Sun className="h-4 w-4" />
                  <span>Nutrients</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
