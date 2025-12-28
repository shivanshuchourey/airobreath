
"use client";

import Link from "next/link";
import React from "react";
import {
  Heart,
  Plus,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LiveClassroomIcon,
  AIStudyNotesIcon,
  ClassRecordingsIcon,
  HomeworkIcon,
  ParentTeacherChatIcon,
  TuitionClassesIcon,
  ContentFilterIcon,
  GamesIcon,
  SportsIcon,
  ArtsIcon,
  MusicIcon,
  ScreenTimeIcon,
  VideosIcon,
} from "@/components/feature-icons";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const features = [
  {
    title: "Live Classroom",
    description: "Watch your child's class in real-time.",
    Icon: LiveClassroomIcon,
    href: "/dashboard/streaming",
    color: "from-red-400 to-red-600",
  },
  {
    title: "AI Study Notes",
    description: "Generate notes from class recordings.",
    Icon: AIStudyNotesIcon,
    href: "/dashboard/notes",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Class Recordings",
    description: "Access and review past class sessions.",
    Icon: ClassRecordingsIcon,
    href: "/dashboard/recordings",
    color: "from-green-400 to-green-600",
  },
  {
    title: "Homework",
    description: "View and track assignments.",
    Icon: HomeworkIcon,
    href: "/dashboard/homework",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Parent-Teacher Chat",
    description: "Communicate directly with teachers.",
    Icon: ParentTeacherChatIcon,
    href: "/dashboard/chat",
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Tuition Classes",
    description: "Manage and view extra classes.",
    Icon: TuitionClassesIcon,
    href: "/dashboard/tuition",
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "Videos",
    description: "Watch educational videos.",
    Icon: VideosIcon,
    href: "/dashboard/videos",
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Screen Time",
    description: "Set daily limits and monitor usage.",
    Icon: ScreenTimeIcon,
    href: "/dashboard/screentime",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Content Filter",
    description: "Manage and filter content.",
    Icon: ContentFilterIcon,
    href: "/dashboard/content-filter",
    color: "from-red-400 to-red-600",
  },
  {
    title: "Games",
    description: "Play fun, educational games.",
    Icon: GamesIcon,
    href: "/dashboard/games",
    color: "from-teal-400 to-teal-600",
  },
  {
    title: "Arts",
    description: "Discover creative arts and craft classes.",
    Icon: ArtsIcon,
    href: "/dashboard/arts",
    color: "from-lime-400 to-lime-600",
  },
  {
    title: "Music",
    description: "Find music lessons and schools.",
    Icon: MusicIcon,
    href: "/dashboard/music",
    color: "from-rose-400 to-rose-600",
  },
];

const sportsFeature = {
    title: "Sports",
    description: "Explore sports academies and activities.",
    Icon: SportsIcon,
    href: "/dashboard/sports",
    color: "from-indigo-400 to-indigo-600",
};

const todaySchedule = [
    { time: "9:00 AM", subject: "Math - Algebra", status: "Finished" },
    { time: "10:15 AM", subject: "Science - Photosynthesis", status: "Finished" },
    { time: "11:30 AM", subject: "Recess", status: "Ongoing" },
    { time: "1:00 PM", subject: "History - The Roman Empire", status: "Upcoming" },
    { time: "2:15 PM", subject: "English - Verb Tenses", status: "Upcoming" },
];

const stories = [
    { title: "Fun time in the park!", time: "2h ago", image: "https://picsum.photos/300/500", aiHint: "child playing" },
    { title: "Learning to draw", time: "5h ago", image: "https://picsum.photos/300/500", aiHint: "child drawing" },
    { title: "First day of school", time: "1d ago", image: "https://picsum.photos/300/500", aiHint: "child smiling" },
    { title: "Soccer practice", time: "2d ago", image: "https://picsum.photos/300/500", aiHint: "child playing soccer" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Student Dashboard
        </h1>
        <p className="text-muted-foreground">
          Here's a summary of your child's day.
        </p>
      </div>

       <div className="space-y-6">
         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Heart />Recent Stories</CardTitle>
                <CardDescription>A look back at your child's recent stories.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                 <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <button className="h-16 w-16 rounded-full bg-muted flex items-center justify-center ring-2 ring-dashed ring-muted-foreground hover:bg-secondary transition-colors">
                        <Plus className="h-8 w-8 text-muted-foreground" />
                    </button>
                    <span className="text-xs font-medium">Add Story</span>
                </div>
               {stories.map(story => (
                   <div key={story.title} className="flex flex-col items-center gap-2 flex-shrink-0 text-center w-20">
                        <Avatar className="h-16 w-16 ring-2 ring-pink-400 ring-offset-2 ring-offset-background">
                           <AvatarImage src={story.image} alt={story.title} data-ai-hint={story.aiHint} />
                           <AvatarFallback>{story.title.charAt(0)}</AvatarFallback>
                        </Avatar>
                       <p className="text-xs font-medium truncate w-full">{story.title}</p>
                   </div>
               ))}
            </CardContent>
        </Card>
         <Card>
          <CardHeader className="text-center">
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>
              A look at your child's classes for today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaySchedule.map(item => (
                <div key={item.subject} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 rounded-lg bg-secondary/50 gap-2">
                    <div className="flex items-center gap-4">
                        <p className="font-semibold text-primary sm:w-20">{item.time}</p>
                        <p className="text-sm">{item.subject}</p>
                    </div>
                    <Badge variant={item.status === 'Finished' ? 'default' : item.status === 'Ongoing' ? 'secondary' : 'outline'} className="self-start sm:self-center whitespace-nowrap">
                        {item.status}
                    </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

        <div className="space-y-6">
            <Link href={sportsFeature.href} className="group">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <sportsFeature.Icon className="h-20 w-20" />
                        <p className="mt-4 font-bold text-2xl">{sportsFeature.title}</p>
                        <p className="text-sm text-indigo-100 mt-1 h-8">
                        {sportsFeature.description}
                        </p>
                    </CardContent>
                </Card>
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {features.map((feature) => (
                <Link href={feature.href} key={feature.title} className="group">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-3 flex flex-col items-center text-center">
                        <div className={`p-2.5 rounded-full bg-gradient-to-br ${feature.color}`}>
                        <feature.Icon className="h-8 w-8 text-white" />
                        </div>
                        <p className="mt-2 font-semibold text-sm group-hover:text-primary transition-colors">{feature.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 h-8">
                        {feature.description}
                        </p>
                    </CardContent>
                    </Card>
                </Link>
                ))}
            </div>
        </div>
    </div>
  );
}
