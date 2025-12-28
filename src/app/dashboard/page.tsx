
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

const activityFeed = [
  {
    icon: Medal,
    title: "New Achievement Unlocked!",
    description: "Alex completed the 'Weekly Warrior' challenge.",
    time: "2 hours ago",
  },
  {
    icon: PlayCircle,
    title: "New Video Lesson Watched",
    description: "Alex watched 'Mastering the Cover Drive'.",
    time: "5 hours ago",
  },
  {
    icon: Users,
    title: "New Connection",
    description: "You are now connected with Coach Sarah.",
    time: "1 day ago",
  },
];

const challenges = [
  {
    title: "Daily Dash",
    description: "Run 1km",
    progress: 75,
    icon: Flame,
    color: "text-red-500",
  },
  {
    title: "Weekly Warrior",
    description: "50 push-ups",
    progress: 40,
    icon: Zap,
    color: "text-purple-500",
  },
  {
    title: "Monthly Marathon",
    description: "Run 20km total",
    progress: 60,
    icon: Trophy,
    color: "text-amber-500",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Parent Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Jane! Here's a look at Alex's progress.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-center">
          <div className="rounded-lg bg-secondary p-4">
            <p className="text-2xl font-bold">88</p>
            <p className="text-sm text-muted-foreground">Fitness Score</p>
          </div>
          <div className="rounded-lg bg-secondary p-4">
            <p className="text-2xl font-bold">A-</p>
            <p className="text-sm text-muted-foreground">Overall Grade</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Analytics</CardTitle>
          <CardDescription>
            Monthly progress in key fitness areas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full h-[200px]">
            <ResponsiveContainer>
              <BarChart data={performanceData} margin={{ right: 20 }}>
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
                <Bar
                  dataKey="stamina"
                  fill="var(--color-stamina)"
                  radius={4}
                />
                <Bar
                  dataKey="strength"
                  fill="var(--color-strength)"
                  radius={4}
                />
                <Bar dataKey="speed" fill="var(--color-speed)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ongoing Challenges</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {challenges.map((challenge) => (
            <div key={challenge.title}>
              <div className="flex items-center gap-3 mb-2">
                <challenge.icon className={`h-6 w-6 ${challenge.color}`} />
                <div>
                  <p className="font-semibold">{challenge.title}</p>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </div>
              </div>
              <Progress value={challenge.progress} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Activity Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {activityFeed.map((activity, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-full">
                  <activity.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground/80 mt-1">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
            <Button variant="outline" className="w-full">View All Activity</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
