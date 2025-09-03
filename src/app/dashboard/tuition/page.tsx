import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const tuitionClasses = [
  { subject: "Advanced Math", teacher: "Mr. Davison", schedule: "Mon, Wed 5:00 PM", status: "Ongoing" },
  { subject: "Creative Writing", teacher: "Ms. Smith", schedule: "Tue, Thu 4:30 PM", status: "Ongoing" },
  { subject: "Physics Prep", teacher: "Mr. Alan", schedule: "Fri 6:00 PM", status: "Upcoming" },
  { subject: "Spanish Basics", teacher: "Ms. Brie", schedule: "Sat 10:00 AM", status: "Upcoming" },
];

export default function TuitionPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <BookOpenCheck className="h-8 w-8" />
          Tuition Classes
        </h1>
        <p className="text-muted-foreground">
          Manage and view extra classes.
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <CardTitle>Enrolled Classes</CardTitle>
                <CardDescription>
                    Here are the current and upcoming tuition classes.
                </CardDescription>
            </div>
            <Button className="w-full md:w-auto">Enroll in New Class</Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tuitionClasses.map((t) => (
                  <TableRow key={t.subject}>
                    <TableCell className="font-medium whitespace-nowrap">{t.subject}</TableCell>
                    <TableCell className="whitespace-nowrap">{t.teacher}</TableCell>
                    <TableCell className="whitespace-nowrap">{t.schedule}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={t.status === 'Ongoing' ? 'secondary' : 'default'} className={`whitespace-nowrap ${t.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                        {t.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
