

import Link from 'next/link';
import {
  AIStudyNotesIcon,
  ClassRecordingsIcon,
  HomeworkIcon,
  ParentTeacherChatIcon,
  TuitionClassesIcon,
} from '@/components/feature-icons';
import {
  LayoutDashboard,
  Video,
  Clipboard,
  BotMessageSquare,
  MessageSquare,
  BookOpenCheck,
  PlaySquare,
  Gamepad2,
  Trophy,
  Paintbrush,
  Music,
  Hourglass,
  Filter,
  FolderClock,
  HeartPulse,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: 'Fitness & Performance',
    description: "Track your child's physical progress and achievements.",
    href: '/dashboard/fitness',
    icon: Trophy,
  },
  {
    title: 'AI Notes',
    description: 'Generate study notes from class recordings.',
    href: '/dashboard/notes',
    icon: AIStudyNotesIcon,
  },
  {
    title: 'Live Stream',
    description: 'Watch live classroom sessions in real-time.',
    href: '/dashboard/streaming',
    icon: Video,
  },
  {
    title: 'Class Recordings',
    description: 'Review past lessons and catch up on missed classes.',
    href: '/dashboard/recordings',
    icon: ClassRecordingsIcon,
  },
  {
    title: 'Homework',
    description: 'View and manage all homework assignments.',
    href: '/dashboard/homework',
    icon: HomeworkIcon,
  },
  {
    title: 'Parent-Teacher Chat',
    description: 'Communicate directly with school staff.',
    href: '/dashboard/chat',
    icon: ParentTeacherChatIcon,
  },
   {
    title: 'Educational Videos',
    description: 'Access a library of fun and educational videos.',
    href: '/dashboard/videos',
    icon: PlaySquare,
  },
  {
    title: 'Educational Games',
    description: 'Play interactive games that make learning fun.',
    href: '/dashboard/games',
    icon: Gamepad2,
  },
  {
    title: 'Screen Time',
    description: 'Manage and monitor daily screen time usage.',
    href: '/dashboard/screentime',
    icon: Hourglass,
  },
  {
    title: 'Content Filter',
    description: 'Control the content your child can access.',
    href: '/dashboard/content-filter',
    icon: Filter,
  },
  {
    title: 'Sports Academies',
    description: 'Explore and enroll in various sports programs.',
    href: '/dashboard/sports',
    icon: HeartPulse,
  },
  {
    title: 'Arts & Crafts',
    description: 'Unleash creativity with our art programs.',
    href: '/dashboard/arts',
    icon: Paintbrush,
  },
  {
    title: 'Music Lessons',
    description: 'Discover the world of music with expert instructors.',
    href: '/dashboard/music',
    icon: Music,
  },
  {
    title: 'Tuition Classes',
    description: 'Enroll in extra classes for academic support.',
    href: '/dashboard/tuition',
    icon: TuitionClassesIcon,
  },
];

const stories = [
  { name: "Coach Sarah", avatar: "https://placehold.co/80x80.png", aiHint: "person woman" },
  { name: "Alex", avatar: "https://placehold.co/80x80.png", aiHint: "person boy" },
  { name: "Soccer Team", avatar: "https://placehold.co/80x80.png", aiHint: "people group" },
  { name: "Yoga Club", avatar: "https://placehold.co/80x80.png", aiHint: "people group" },
  { name: "Mr. Alan", avatar: "https://placehold.co/80x80.png", aiHint: "person man" },
  { name: "Ms. Brie", avatar: "https://placehold.co/80x80.png", aiHint: "person woman" },
  { name: "Art Class", avatar: "https://placehold.co/80x80.png", aiHint: "art supplies" },
  { name: "Music School", avatar: "https://placehold.co/80x80.png", aiHint: "music notes" },
  { name: "FitKidz", avatar: "https://placehold.co/80x80.png", aiHint: "running shoe" },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-headline tracking-tight">Welcome to FitKidz</h1>
        <p className="text-muted-foreground">
          Play, Grow, and Learn. Here's everything you need at a glance.
        </p>
      </div>

       <Card>
        <CardHeader>
          <CardTitle className="text-xl font-headline">Recent Stories</CardTitle>
        </CardHeader>
        <CardContent>
           <Carousel opts={{ align: "start", dragFree: true }}>
            <CarouselContent>
              {stories.map((story, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="ghost" className="rounded-full w-20 h-20 p-0.5 border-2 border-primary hover:border-accent transition-colors">
                      <Avatar className="w-full h-full">
                        <AvatarImage src={story.avatar} alt={story.name} data-ai-hint={story.aiHint} />
                        <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Button>
                    <p className="text-xs font-medium truncate w-20 text-center">{story.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.title}>
            <Card className="h-full hover:bg-muted/50 transition-colors hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 text-primary">
                   <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg font-headline mb-1">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
