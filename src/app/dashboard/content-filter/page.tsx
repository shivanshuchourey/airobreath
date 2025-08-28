
import { Filter, Youtube, School, Brain, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const contentCategories = [
    { id: "educational", label: "Educational Content", icon: Brain },
    { id: "storytelling", label: "Storytelling & Cartoons", icon: School },
    { id: "creative", label: "Creative & Arts", icon: School },
    { id: "science", label: "Science & Nature", icon: Brain },
]

const platformRestrictions = [
    { id: "youtubekids", label: "YouTube Kids", icon: Youtube, allowed: true },
    { id: "pbskids", label: "PBS Kids", icon: School, allowed: true },
    { id: "khanacademy", label: "Khan Academy Kids", icon: Brain, allowed: false },
]


export default function ContentFilterPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Filter className="h-8 w-8" />
          Content Filtering
        </h1>
        <p className="text-muted-foreground">
          Manage the content your child can access across the platform.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Allowed Content Categories</CardTitle>
            <CardDescription>
              Enable or disable content categories your child can watch.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {contentCategories.map(category => (
                <div key={category.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <Label htmlFor={category.id} className="flex items-center gap-3 cursor-pointer">
                        <category.icon className="h-6 w-6 text-muted-foreground" />
                        <span>{category.label}</span>
                    </Label>
                    <Switch id={category.id} defaultChecked />
                </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Platform Restrictions</CardTitle>
            <CardDescription>
              Allow or block specific video platforms.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             {platformRestrictions.map(platform => (
                <div key={platform.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <Label htmlFor={platform.id} className="flex items-center gap-3 cursor-pointer">
                        <platform.icon className="h-6 w-6 text-muted-foreground" />
                        <span>{platform.label}</span>
                    </Label>
                    <Switch id={platform.id} defaultChecked={platform.allowed} />
                </div>
            ))}
          </CardContent>
        </Card>
      </div>
       <Card>
          <CardHeader>
            <CardTitle>Safety & Privacy</CardTitle>
            <CardDescription>
              Additional settings to ensure a safe viewing experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                <Label htmlFor="safe-search" className="flex items-center gap-3 cursor-pointer">
                    <Shield className="h-6 w-6 text-muted-foreground" />
                    <span>Enable Safe Search</span>
                </Label>
                <Switch id="safe-search" defaultChecked />
            </div>
             <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                <Label htmlFor="comment-filtering" className="flex items-center gap-3 cursor-pointer">
                    <Shield className="h-6 w-6 text-muted-foreground" />
                    <span>Filter Inappropriate Comments</span>
                </Label>
                <Switch id="comment-filtering" defaultChecked />
            </div>
          </CardContent>
        </Card>
    </div>
  );
}
