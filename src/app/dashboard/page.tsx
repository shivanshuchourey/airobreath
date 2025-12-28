
import Link from 'next/link';
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
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
    icon: BotMessageSquare,
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
    icon: FolderClock,
  },
  {
    title: 'Homework',
    description: 'View and manage all homework assignments.',
    href: '/dashboard/homework',
    icon: Clipboard,
  },
  {
    title: 'Parent-Teacher Chat',
    description: 'Communicate directly with school staff.',
    href: '/dashboard/chat',
    icon: MessageSquare,
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
    icon: BookOpenCheck,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-headline tracking-tight">Welcome to FitKidz</h1>
        <p className="text-muted-foreground">
          Play, Grow, and Learn. Here's everything you need at a glance.
        </p>
      </div>

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
