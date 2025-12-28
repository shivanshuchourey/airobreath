
import Image from "next/image";
import { Hourglass, Gamepad2, Youtube, MonitorPlay } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const usageData = [
  { name: "Videos", time: "40m", percentage: 47, Icon: Youtube, color: "bg-red-500" },
  { name: "Games", time: "25m", percentage: 29, Icon: Gamepad2, color: "bg-blue-500" },
  { name: "Other", time: "20m", percentage: 24, Icon: MonitorPlay, color: "bg-yellow-500" },
];

export default function ScreenTimePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Hourglass className="h-8 w-8" />
          Screen Time Management
        </h1>
        <p className="text-muted-foreground">
          Monitor and set limits for your child's daily screen time.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Today's Usage</CardTitle>
                    <CardDescription>Total screen time today: 1h 25m</CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={85} className="h-4 mb-4" />
                    <div className="space-y-4">
                        {usageData.map((item) => (
                            <div key={item.name} className="flex items-center">
                                <item.Icon className="h-5 w-5 mr-3" />
                                <span className="w-20">{item.name}</span>
                                <div className="flex-1 mx-4">
                                     <div className="h-2 rounded-full bg-secondary overflow-hidden">
                                        <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.percentage}%` }} />
                                     </div>
                                </div>
                                <span className="text-sm text-muted-foreground">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Set Daily Limits</CardTitle>
                    <CardDescription>Set maximum daily screen time for specific activities.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="videos-limit" className="flex items-center gap-3">
                            <Youtube className="h-6 w-6 text-red-500"/>
                            <span>Videos</span>
                        </Label>
                        <div className="flex items-center gap-2 w-40">
                             <Input id="videos-limit" type="number" defaultValue={45} className="w-20" />
                             <span>minutes</span>
                        </div>
                    </div>
                     <div className="flex items-center justify-between">
                        <Label htmlFor="games-limit" className="flex items-center gap-3">
                            <Gamepad2 className="h-6 w-6 text-blue-500"/>
                             <span>Games</span>
                        </Label>
                         <div className="flex items-center gap-2 w-40">
                             <Input id="games-limit" type="number" defaultValue={60} className="w-20" />
                             <span>minutes</span>
                        </div>
                    </div>
                     <div className="flex items-center justify-between">
                        <Label htmlFor="other-limit" className="flex items-center gap-3">
                            <MonitorPlay className="h-6 w-6 text-yellow-500"/>
                           <span>Other</span>
                        </Label>
                         <div className="flex items-center gap-2 w-40">
                            <Input id="other-limit" type="number" defaultValue={30} className="w-20" />
                             <span>minutes</span>
                        </div>
                    </div>
                     <Button className="w-full" size="lg">Save Limits</Button>
                </CardContent>
            </Card>
        </div>

        <div className="space-y-6">
            <Card className="bg-gradient-to-br from-yellow-100 to-amber-200">
                 <CardHeader className="text-center">
                    <div className="mx-auto bg-white p-3 rounded-full w-fit mb-2">
                        <Image src="https://placehold.co/80x80.png" alt="Child avatar" width={80} height={80} className="rounded-full" data-ai-hint="person boy" />
                    </div>
                    <CardTitle>Alex's Dashboard</CardTitle>
                 </CardHeader>
                 <CardContent className="text-center">
                    <p className="text-4xl font-bold">1h 25m</p>
                    <p className="text-muted-foreground">Total Usage Today</p>
                 </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Positive Nudges</CardTitle>
                    <CardDescription>Encourage healthy habits.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800">
                        <p className="font-semibold">Time for a break!</p>
                        <p className="text-sm">You've been playing games for 30 minutes. Why not play outside for a bit?</p>
                    </div>
                     <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                        <p className="font-semibold">Today's Goal</p>
                        <p className="text-sm">Read a book for 20 minutes.</p>
                    </div>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
