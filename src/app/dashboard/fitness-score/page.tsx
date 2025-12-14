
"use client";

import {
  Activity,
  Award,
  BarChart2,
  BookOpen,
  BrainCircuit,
  Calendar,
  ChevronDown,
  ClipboardList,
  Flame,
  Gamepad2,
  HeartPulse,
  Lightbulb,
  Medal,
  PlayCircle,
  ShieldCheck,
  Star,
  Trophy,
  Users,
  Video,
  Wind,
  Zap,
  Dumbbell,
  Apple,
  TrendingUp,
  Goal,
  Edit,
} from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Link from "next/link";

const performanceData = [
  { month: "Jan", stamina: 75, strength: 65, speed: 70 },
  { month: "Feb", stamina: 78, strength: 68, speed: 72 },
  { month: "Mar", stamina: 82, strength: 72, speed: 75 },
  { month: "Apr", stamina: 85, strength: 75, speed: 80 },
  { month: "May", stamina: 88, strength: 78, speed: 82 },
  { month: "Jun", stamina: 92, strength: 80, speed: 85 },
];

const chartConfig = {
  stamina: { label: "Stamina", color: "hsl(var(--chart-1))" },
  strength: { label: "Strength", color: "hsl(var(--chart-2))" },
  speed: { label: "Speed", color: "hsl(var(--chart-3))" },
};

const leaderboardData = [
  { rank: 1, name: "Alex Doe", score: 12500, avatar: "https://placehold.co/40x40.png" },
  { rank: 2, name: "Priya S.", score: 12350, avatar: "https://placehold.co/40x40.png" },
  { rank: 3, name: "Sam Wilson", score: 11980, avatar: "https://placehold.co/40x40.png" },
];

const featureCards = [
    { title: "Nutrition Guide", icon: Apple, description: "Diet plans & healthy recipes." },
    { title: "Injury Prevention", icon: ShieldCheck, description: "Exercises to avoid injuries." },
    { title: "Mental Toughness", icon: BrainCircuit, description: "Build focus and resilience." },
    { title: "Sleep Tracking", icon: Calendar, description: "Monitor sleep for recovery." },
    { title: "Hydration Goals", icon: Wind, description: "Track daily water intake." },
    { title: "Skill Drills", icon: Goal, description: "Targeted practice exercises." },
    { title: "Peer Challenges", icon: Users, description: "Compete with friends." },
    { title: "Live Workshops", icon: Video, description: "Join sessions with experts." },
    { title: "Progress Reports", icon: ClipboardList, description: "Share progress with parents." },
    { title: "Equipment Guide", icon: BookOpen, description: "Learn about the right gear." },
    { title: "Rules of the Game", icon: Gamepad2, description: "Understand sport regulations." },
    { title: "Famous Matches", icon: PlayCircle, description: "Watch and learn from pros." },
    { title: "Athlete Stories", icon: Star, description: "Get inspired by success stories." },
    { title: "Sports News", icon: Award, description: "Latest updates from the sports world." },
    { title: "Flexibility Routines", icon: Activity, description: "Stretches for better mobility." },
    { title: "Recovery Techniques", icon: HeartPulse, description: "Post-training recovery tips." },
    { title: "Sports Psychology", icon: Lightbulb, description: "Understand the winner's mindset." },
    { title: "Team Strategy", icon: Users, description: "Learn about team dynamics." },
    { title: "Off-season Training", icon: Calendar, description: "Stay fit during breaks." },
    { title: "Parent's Corner", icon: Users, description: "Tips for supporting your athlete." },
];

export default function FitnessScorePage() {
  const fitnessScore = 88;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            Fitness Score & Performance
            </h1>
            <p className="text-muted-foreground">
            A complete overview of your child's athletic journey.
            </p>
        </div>
        <Link href="/dashboard/profile">
            <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit Student Profile
            </Button>
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Monthly progress in key fitness areas.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="w-full h-[250px]">
                <ResponsiveContainer>
                  <BarChart data={performanceData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="stamina" fill="var(--color-stamina)" radius={4} />
                    <Bar dataKey="strength" fill="var(--color-strength)" radius={4} />
                    <Bar dataKey="speed" fill="var(--color-speed)" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Challenges & Competitions</CardTitle>
              <CardDescription>Engage in daily, weekly, and monthly events to earn points.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="weekly">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="daily">Daily</TabsTrigger>
                        <TabsTrigger value="weekly">Weekly</TabsTrigger>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    </TabsList>
                    <TabsContent value="daily" className="mt-4">
                        <Card className="bg-secondary/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Flame className="text-red-500"/>Daily Dash: 1km Run</CardTitle>
                                <CardDescription>Winner: <strong>Priya S.</strong> with a time of 4:32!</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button variant="outline" size="sm">View Leaderboard</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="weekly" className="mt-4">
                         <Card className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Zap/>Weekly Warrior: Max Push-ups</CardTitle>
                                <CardDescription className="text-purple-200">Winner: <strong>Alex D.</strong> with 45 push-ups!</CardDescription>
                            </CardHeader>
                             <CardFooter>
                                <Button variant="secondary" size="sm">View Leaderboard</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="monthly" className="mt-4">
                        <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Trophy className="text-yellow-300"/>Monthly Marathon: Total Distance</CardTitle>
                                <CardDescription className="text-amber-200">Winner: <strong>Sam W.</strong> with 42.2km!</CardDescription>
                            </CardHeader>
                             <CardFooter>
                                <Button variant="secondary" size="sm">View Leaderboard</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
            <Card className="relative flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary to-accent text-primary-foreground p-6">
                <CardTitle className="text-lg">Overall Fitness Score</CardTitle>
                <div className="relative my-4">
                    <svg className="h-32 w-32" viewBox="0 0 100 100">
                        <circle className="stroke-current text-primary-foreground/20" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent"></circle>
                        <circle
                        className="stroke-current text-yellow-300"
                        strokeWidth="10"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40 * (fitnessScore / 100)} ${2 * Math.PI * 40 * (1 - fitnessScore / 100)}`}
                        strokeDashoffset={2 * Math.PI * 40 * 0.25}
                        strokeLinecap="round"
                        style={{transform: 'rotate(-90deg)', transformOrigin: '50% 50%'}}
                        ></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold">{fitnessScore}</span>
                    </div>
                </div>
                <CardDescription className="text-primary-foreground/80">Excellent! Your child is in the top 10%.</CardDescription>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BarChart2/>Overall Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Rank</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="text-right">Score</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {leaderboardData.map(p => (
                                <TableRow key={p.rank}>
                                    <TableCell className="font-bold">{p.rank}</TableCell>
                                    <TableCell className="flex items-center gap-2">
                                        <Avatar className="h-8 w-8"><AvatarImage src={p.avatar} /><AvatarFallback>{p.name.charAt(0)}</AvatarFallback></Avatar>
                                        {p.name}
                                    </TableCell>
                                    <TableCell className="text-right font-mono">{p.score}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </div>
      
       <Card>
            <CardHeader>
                <CardTitle>Trophy Room & Achievements</CardTitle>
                <CardDescription>Celebrate milestones and accomplishments.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
                <Badge className="p-2 text-base gap-2 bg-yellow-400 text-yellow-900"><Medal/>First 10km Run</Badge>
                <Badge className="p-2 text-base gap-2 bg-slate-300 text-slate-800"><Dumbbell/>500 Push-up Club</Badge>
                <Badge className="p-2 text-base gap-2 bg-blue-400 text-blue-900"><Zap/>Perfect Attendance</Badge>
                <Badge className="p-2 text-base gap-2 bg-green-400 text-green-900"><Star/>Weekly Top Performer</Badge>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Explore More Features</CardTitle>
                <CardDescription>Unlock your child's full potential with these tools.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {featureCards.map(feature => (
                    <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-secondary mb-3">
                                <feature.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <p className="font-semibold text-sm mb-1">{feature.title}</p>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
    </div>
  );
}

    