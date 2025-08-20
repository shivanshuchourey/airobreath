import Link from "next/link";
import {
  Activity,
  BotMessageSquare,
  FolderClock,
  MessageSquare,
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

const features = [
  {
    title: "Live Classroom",
    description: "Watch your child's class in real-time.",
    icon: Video,
    href: "/dashboard/streaming",
    color: "text-red-500",
  },
  {
    title: "AI Study Notes",
    description: "Generate notes from class recordings.",
    icon: BotMessageSquare,
    href: "/dashboard/notes",
    color: "text-blue-500",
  },
  {
    title: "Class Recordings",
    description: "Access and review past class sessions.",
    icon: FolderClock,
    href: "/dashboard/recordings",
    color: "text-green-500",
  },
  {
    title: "Parent-Teacher Chat",
    description: "Communicate directly with teachers.",
    icon: MessageSquare,
    href: "/dashboard/chat",
    color: "text-purple-500",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome Back, Jane!
        </h1>
        <p className="text-muted-foreground">
          Here's a summary of your child's day.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {feature.title}
              </CardTitle>
              <feature.icon className={`h-5 w-5 ${feature.color}`} />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground h-10">
                {feature.description}
              </p>
              <Link href={feature.href}>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  Go to {feature.title}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Updates on your child's activities and attendance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <Activity className="h-5 w-5 mr-3" />
                <p className="text-sm">
                  Attended <span className="font-semibold">Math Class</span> at
                  9:00 AM.
                </p>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-3" />
                <p className="text-sm">
                  Participated in{" "}
                  <span className="font-semibold">Group Project</span>.
                </p>
              </div>
            </div>
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
              <div className="flex items-center">
                <p className="text-sm font-semibold w-24">Oct 25</p>
                <p className="text-sm">Parent-Teacher Meeting</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-semibold w-24">Nov 5</p>
                <p className="text-sm">Annual Sports Day</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
