
"use client";

import Image from "next/image";
import { Trophy, PlayCircle, Star, Target, Shield, Dumbbell, Zap, BarChart, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const allSports = [
    "All Sports", "Cricket", "Football", "Swimming", "Yoga", "Badminton", "Basketball", "Gymnastics", "Tennis", "Martial Arts", "Athletics", "Volleyball", "Baseball"
];

const videoLessons = [
  { sport: "Cricket", title: "Mastering the Cover Drive", image: "https://picsum.photos/seed/cricket/600/400", aiHint: "cricket batting" },
  { sport: "Football", title: "Perfecting Your Free Kick", image: "https://picsum.photos/seed/football/600/400", aiHint: "soccer ball" },
  { sport: "Swimming", title: "Freestyle Breathing Technique", image: "https://picsum.photos/seed/swimming/600/400", aiHint: "swimming lane" },
  { sport: "Yoga", title: "Beginner's Sun Salutation", image: "https://picsum.photos/seed/yoga/600/400", aiHint: "yoga pose" },
  { sport: "Badminton", title: "Advanced Smash Techniques", image: "https://picsum.photos/seed/badminton/600/400", aiHint: "badminton racket" },
  { sport: "Basketball", title: "Mastering the Jump Shot", image: "https://picsum.photos/seed/basketball-shot/600/400", aiHint: "basketball player" },
  { sport: "Martial Arts", title: "Basic Karate Stances", image: "https://picsum.photos/seed/karate/600/400", aiHint: "karate pose" },
  { sport: "Tennis", title: "Improving Your Serve", image: "https://picsum.photos/seed/tennis-serve/600/400", aiHint: "tennis player serving" },
];

const leaderboard = [
    { name: "Alex D.", points: 2450, avatar: "https://placehold.co/40x40.png", aiHint: "person boy" },
    { name: "Priya S.", points: 2300, avatar: "https://placehold.co/40x40.png", aiHint: "person girl" },
    { name: "Tom H.", points: 2150, avatar: "https://placehold.co/40x40.png", aiHint: "person boy" },
]

const academies = [
  {
    name: "Elite Soccer Academy",
    specialty: "Professional soccer training for all ages.",
    image: "https://picsum.photos/seed/soccer/600/400",
    aiHint: "soccer field",
    sport: "Football"
  },
  {
    name: "Hoops Dynasty Basketball",
    specialty: "Dribbling, shooting, and team play skills.",
    image: "https://picsum.photos/seed/basketball/600/400",
    aiHint: "basketball court",
    sport: "Basketball"
  },
  {
    name: "Grand Slam Tennis Club",
    specialty: "From beginners to advanced tennis players.",
    image: "https://picsum.photos/seed/tennis/600/400",
    aiHint: "tennis court",
    sport: "Tennis"
  },
  {
    name: "Aqua Warriors Swim School",
    specialty: "Competitive swimming and water safety.",
    image: "https://picsum.photos/seed/swimming-pool/600/400",
    aiHint: "swimming pool",
    sport: "Swimming"
  },
  {
    name: "Flip & Fly Gymnastics",
    specialty: "Artistic and rhythmic gymnastics programs.",
    image: "https://picsum.photos/seed/gymnastics/600/400",
    aiHint: "gymnast balance",
    sport: "Gymnastics"
  },
  {
    name: "Speedsters Track Club",
    specialty: "Sprinting, long distance, and field events.",
    image: "https://picsum.photos/seed/track/600/400",
    aiHint: "running track",
    sport: "Athletics"
  },
  {
    name: "Cricket Champions Academy",
    specialty: "Batting, bowling, and fielding masterclass.",
    image: "https://picsum.photos/seed/cricket-pitch/600/400",
    aiHint: "cricket game",
    sport: "Cricket"
  },
  {
    name: "Shuttle Masters Badminton",
    specialty: "Learn smashes, drops, and net play.",
    image: "https://picsum.photos/seed/badminton-court/600/400",
    aiHint: "badminton court",
    sport: "Badminton"
  },
  {
    name: "Dragon Dojo Martial Arts",
    specialty: "Discipline and skill in Karate & Taekwondo.",
    image: "https://picsum.photos/seed/dojo/600/400",
    aiHint: "martial arts dojo",
    sport: "Martial Arts"
  },
   {
    name: "Spike Zone Volleyball",
    specialty: "Serving, setting, and spiking clinics.",
    image: "https://picsum.photos/seed/volleyball/600/400",
    aiHint: "volleyball net",
    sport: "Volleyball"
  },
  {
    name: "Home Run Baseball Club",
    specialty: "Pitching, hitting, and fielding fundamentals.",
    image: "https://picsum.photos/seed/baseball/600/400",
    aiHint: "baseball diamond",
    sport: "Baseball"
  },
];


export default function SportsPage() {
  const [selectedSport, setSelectedSport] = useState("All Sports");

  const filteredLessons = videoLessons.filter(lesson => 
    selectedSport === 'All Sports' || lesson.sport === selectedSport
  );

  const filteredAcademies = academies.filter(academy =>
    selectedSport === 'All Sports' || academy.sport === selectedSport
  );


  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Trophy className="h-8 w-8 text-primary" />
            Sports Dashboard
          </h1>
          <p className="text-muted-foreground">
            Your child's gateway to athletic excellence.
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-48">
              {selectedSport}
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select a Sport</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={selectedSport} onValueChange={setSelectedSport}>
              {allSports.map(sport => (
                <DropdownMenuRadioItem key={sport} value={sport}>{sport}</DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
            <Card className="bg-gradient-to-tr from-accent/80 to-accent">
                <CardHeader>
                    <CardTitle className="text-accent-foreground">Weekly Challenge</CardTitle>
                    <CardDescription className="text-accent-foreground/80">Complete 100 skips in under 2 minutes!</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                    <div className="text-accent-foreground">
                        <p className="text-sm">Reward</p>
                        <p className="text-lg font-bold flex items-center gap-1"><Star className="h-5 w-5 text-yellow-300"/> 500 Points</p>
                    </div>
                    <Button variant="secondary" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                        <Zap className="mr-2 h-4 w-4"/>
                        Start Challenge
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Video Lessons</CardTitle>
                    <CardDescription>Beginner to advanced tutorials by experts.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredLessons.length > 0 ? filteredLessons.map(lesson => (
                        <div key={lesson.title} className="relative group overflow-hidden rounded-lg">
                             <Image
                                src={lesson.image}
                                alt={lesson.title}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                data-ai-hint={lesson.aiHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                                <Badge className="w-fit mb-2">{lesson.sport}</Badge>
                                <h3 className="font-semibold text-white text-lg">{lesson.title}</h3>
                                <Link href="/dashboard/streaming" passHref>
                                  <Button variant="secondary" size="sm" className="mt-2 w-fit">
                                      <PlayCircle className="mr-2 h-4 w-4"/> Watch Now
                                  </Button>
                                </Link>
                            </div>
                        </div>
                    )) : (
                      <p className="text-muted-foreground col-span-full text-center py-8">No video lessons available for {selectedSport}.</p>
                    )}
                </CardContent>
            </Card>

            <Card className="border-primary/50 border-2">
                 <CardHeader className="text-center">
                    <div className="w-fit mx-auto bg-primary/10 p-3 rounded-full mb-2">
                        <Target className="h-8 w-8 text-primary"/>
                    </div>
                    <CardTitle>AI Pose Detection</CardTitle>
                    <CardDescription>Get real-time feedback on your form and posture. Correct your batting stance, yoga poses, and more!</CardDescription>
                 </CardHeader>
                 <CardFooter>
                    <Button variant="outline" className="w-full" disabled>
                        Coming Soon
                    </Button>
                 </CardFooter>
            </Card>

        </div>
        <div className="space-y-8">
             <Card>
                <CardHeader>
                    <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="text-center">
                        <p className="text-4xl font-bold">12,500</p>
                        <p className="text-muted-foreground">Total Points</p>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <p className="font-medium">Level 5</p>
                            <p className="text-muted-foreground">500/1000 to Level 6</p>
                        </div>
                        <Progress value={50}/>
                    </div>
                    <div className="flex justify-around pt-2">
                        <div className="text-center"><Badge variant="secondary" className="text-lg">🥉x5</Badge><p className="text-xs mt-1">Bronze</p></div>
                        <div className="text-center"><Badge variant="secondary" className="text-lg">🥈x2</Badge><p className="text-xs mt-1">Silver</p></div>
                        <div className="text-center"><Badge variant="secondary" className="text-lg">🥇x1</Badge><p className="text-xs mt-1">Gold</p></div>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BarChart/>Leaderboard</CardTitle>
                    <CardDescription>Weekly top performers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    {leaderboard.map((player, index) => (
                        <div key={player.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="font-bold w-4">{index + 1}</span>
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src={player.avatar} alt={player.name} data-ai-hint={player.aiHint} />
                                    <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{player.name}</p>
                                    <p className="text-sm text-muted-foreground">{player.points} pts</p>
                                </div>
                            </div>
                            {index === 0 && <Trophy className="h-5 w-5 text-yellow-500"/>}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
       <Card>
          <CardHeader>
            <CardTitle>Browse Academies & Live Classes</CardTitle>
            <CardDescription>Find certified coaches and professional training programs.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAcademies.length > 0 ? filteredAcademies.map((academy) => (
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
                  <Button>View Details & Book Class</Button>
                </CardContent>
              </Card>
            )) : (
              <p className="text-muted-foreground col-span-full text-center py-8">No academies available for {selectedSport}.</p>
            )}
          </CardContent>
        </Card>
    </div>
  );
}

    