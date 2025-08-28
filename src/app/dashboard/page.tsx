import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpenCheck,
  BotMessageSquare,
  Clipboard,
  FolderClock,
  MessageSquare,
  PlaySquare,
  Users,
  Video,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    title: "Sports",
    description: "Explore sports academies and activities.",
    Icon: SportsIcon,
    href: "/dashboard/sports",
    color: "from-indigo-400 to-indigo-600",
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

const todaySchedule = [
    { time: "9:00 AM", subject: "Math - Algebra", status: "Finished" },
    { time: "10:15 AM", subject: "Science - Photosynthesis", status: "Finished" },
    { time: "11:30 AM", subject: "Recess", status: "Ongoing" },
    { time: "1:00 PM", subject: "History - The Roman Empire", status: "Upcoming" },
    { time: "2:15 PM", subject: "English - Verb Tenses", status: "Upcoming" },
]

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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => ( 
           <Link href={feature.href} key={feature.title} className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 flex flex-col items-center text-center">
                 <div className={`p-4 rounded-full bg-gradient-to-br ${feature.color}`}>
                   <feature.Icon className="h-8 w-8 text-white" />
                 </div>
                <p className="mt-4 font-semibold text-base group-hover:text-primary transition-colors">{feature.title}</p>
                <p className="text-xs text-muted-foreground mt-1 h-10">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>
              A look at your child's classes for today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaySchedule.map(item => (
                <div key={item.subject} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-4">
                        <p className="font-semibold text-primary w-20">{item.time}</p>
                        <p className="text-sm">{item.subject}</p>
                    </div>
                    <Badge variant={item.status === 'Finished' ? 'default' : item.status === 'Ongoing' ? 'secondary' : 'outline'}>
                        {item.status}
                    </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                 <CardDescription>Common tasks, one click away.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Button variant="outline" asChild>
                    <Link href="/dashboard/chat">
                        <MessageSquare className="mr-2"/> Send a message
                    </Link>
                </Button>
                 <Button variant="outline" asChild>
                    <Link href="/dashboard/homework">
                        <Clipboard className="mr-2"/> Check Homework
                    </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  Don't miss out on important school events.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Parent-Teacher Meeting</p>
                    <p className="text-sm font-semibold">Oct 25</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Annual Sports Day</p>
                    <p className="text-sm font-semibold">Nov 5</p>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
