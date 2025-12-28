import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AIStudyNotesIcon,
  ArtsIcon,
  ClassRecordingsIcon,
  ContentFilterIcon,
  GamesIcon,
  HomeworkIcon,
  LiveClassroomIcon,
  MomentsIcon,
  MusicIcon,
  ParentTeacherChatIcon,
  SportsIcon,
  ScreenTimeIcon,
  TuitionClassesIcon,
  VideosIcon,
} from "@/components/feature-icons";
import { UserPlus, Trophy } from "lucide-react";

const features = [
  {
    title: "Fitness & Performance",
    description: "Track athletic progress, scores, and leaderboards.",
    href: "/dashboard/fitness",
    icon: Trophy,
  },
  {
    title: "Registration",
    description: "Manage student profiles and enrollment details.",
    href: "/dashboard/registration",
    icon: UserPlus,
  },
  {
    title: "Live Classroom",
    description: "View real-time classroom video streams.",
    href: "/dashboard/streaming",
    icon: LiveClassroomIcon,
  },
  {
    title: "Class Recordings",
    description: "Access archived video lessons and sessions.",
    href: "/dashboard/recordings",
    icon: ClassRecordingsIcon,
  },
  {
    title: "AI Study Notes",
    description: "Generate notes from class recordings automatically.",
    href: "/dashboard/notes",
    icon: AIStudyNotesIcon,
  },
  {
    title: "Homework",
    description: "Check assignments, due dates, and status.",
    href: "/dashboard/homework",
    icon: HomeworkIcon,
  },
  {
    title: "Parent-Teacher Chat",
    description: "Communicate directly with school staff.",
    href: "/dashboard/chat",
    icon: ParentTeacherChatIcon,
  },
  {
    title: "Tuition Classes",
    description: "Enroll and manage extra-curricular classes.",
    href: "/dashboard/tuition",
    icon: TuitionClassesIcon,
  },
  {
    title: "Educational Videos",
    description: "Browse a library of curated educational content.",
    href: "/dashboard/videos",
    icon: VideosIcon,
  },
  {
    title: "Screen Time",
    description: "Monitor and manage daily device usage.",
    href: "/dashboard/screentime",
    icon: ScreenTimeIcon,
  },
  {
    title: "Content Filter",
    description: "Set restrictions on viewable content.",
    href: "/dashboard/content-filter",
    icon: ContentFilterIcon,
  },
  {
    title: "Educational Games",
    description: "Fun, interactive games for learning.",
    href: "/dashboard/games",
    icon: GamesIcon,
  },
  {
    title: "Sports",
    description: "Access training, lessons, and challenges.",
    href: "/dashboard/sports",
    icon: SportsIcon,
  },
  {
    title: "Arts & Crafts",
    description: "Explore creativity with art programs.",
    href: "/dashboard/arts",
    icon: ArtsIcon,
  },
  {
    title: "Music",
    description: "Discover instrument and vocal lessons.",
    href: "/dashboard/music",
    icon: MusicIcon,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to Rainbow School
        </h1>
        <p className="text-muted-foreground">
          Your all-in-one platform for learning and growth.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.title}>
            <Card className="h-full transform-gpu transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
