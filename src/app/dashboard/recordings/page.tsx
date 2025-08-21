import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderClock, BotMessageSquare, PlayCircle } from "lucide-react";

const classRecordings = {
  "October 24, 2023 (Today)": {
    "Math - Algebra": {
      teacher: "Mr. Alan",
      time: "9:00 AM - 10:00 AM",
    },
    "Science - Photosynthesis": {
      teacher: "Ms. Brie",
      time: "10:15 AM - 11:15 AM",
    },
  },
  "October 23, 2023": {
    "History - The Roman Empire": {
      teacher: "Mr. Davison",
      time: "1:00 PM - 2:00 PM",
    },
    "English - Verb Tenses": {
      teacher: "Ms. Smith",
      time: "2:15 PM - 3:15 PM",
    },
  },
  "October 22, 2023": {
    "Art - Color Theory": {
      teacher: "Ms. Creato",
      time: "11:00 AM - 12:00 PM"
    }
  }
};

export default function RecordingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <FolderClock className="h-8 w-8" />
          Class Recordings
        </h1>
        <p className="text-muted-foreground">
          Access and review recordings of past classes.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Session Archive</CardTitle>
          <CardDescription>
            Browse recordings by date and subject.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="item-0">
            {Object.entries(classRecordings).map(([date, subjects], index) => (
              <AccordionItem key={date} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  {date}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-4 border-l-2 ml-2">
                    {Object.entries(subjects).map(([subject, details]) => (
                      <div
                        key={subject}
                        className="p-4 rounded-lg bg-secondary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div>
                          <p className="font-semibold text-base">{subject}</p>
                          <p className="text-sm text-muted-foreground">
                            Taught by {details.teacher}
                          </p>
                          <p className="text-xs text-muted-foreground/80 mt-1">
                            {details.time}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                           <Link href="/dashboard/streaming">
                            <Button variant="outline" size="sm">
                              <PlayCircle className="mr-2 h-4 w-4" />
                              Watch
                            </Button>
                          </Link>
                           <Link href="/dashboard/notes">
                            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                              <BotMessageSquare className="mr-2 h-4 w-4" />
                              AI Notes
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
