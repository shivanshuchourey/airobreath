import Image from "next/image";
import { Download, FileText, Share2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WhiteboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Digital Whiteboard Sync
        </h1>
        <p className="text-muted-foreground">
          Access notes from the classroom whiteboard anytime.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Math Class - October 24, 2023</CardTitle>
            <CardDescription>Topic: Introduction to Algebra</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="w-full aspect-video bg-white rounded-lg border-2 border-dashed overflow-hidden shadow-inner">
                <Image
                  src="https://placehold.co/1280x720.png"
                  alt="Digital whiteboard content"
                  width={1280}
                  height={720}
                  className="w-full h-full object-contain p-4"
                  data-ai-hint="whiteboard notes"
                />
              </div>
          </CardContent>
           <CardFooter className="flex-col sm:flex-row gap-2">
              <Button className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Export as PDF
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                <Share2 className="mr-2 h-4 w-4" />
                Share Notes
              </Button>
          </CardFooter>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Previous Notes</CardTitle>
                <CardDescription>Access notes from past lessons.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <LinkToFile name="Science - Photosynthesis" date="Oct 23, 2023" />
                <LinkToFile name="History - The Roman Empire" date="Oct 22, 2023" />
                <LinkToFile name="English - Grammar Basics" date="Oct 21, 2023" />
                 <LinkToFile name="Art - Color Theory" date="Oct 20, 2023" />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

const LinkToFile = ({ name, date }: { name: string, date: string }) => (
    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors">
        <FileText className="h-6 w-6 text-primary flex-shrink-0" />
        <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
        </div>
    </a>
)
