
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
import { Clipboard } from "lucide-react";

const homeworkAssignments = [
  { subject: "Math", assignment: "Complete worksheet on fractions.", dueDate: "2023-10-26", status: "Pending" },
  { subject: "Science", assignment: "Read chapter 5 and answer questions.", dueDate: "2023-10-27", status: "Pending" },
  { subject: "History", assignment: "Write a short essay on The Roman Empire.", dueDate: "2023-10-28", status: "Completed" },
  { subject: "English", assignment: "Prepare for the upcoming verb tense quiz.", dueDate: "2023-10-25", status: "Completed" },
  { subject: "Art", assignment: "Sketch a still life of a fruit bowl.", dueDate: "2023-10-30", status: "Pending" },
];

export default function HomeworkPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Clipboard className="h-8 w-8" />
          Homework Assignments
        </h1>
        <p className="text-muted-foreground">
          View and track all assigned homework.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Assignment List</CardTitle>
          <CardDescription>
            Here are the current and past homework assignments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Assignment</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {homeworkAssignments.map((hw) => (
                  <TableRow key={hw.assignment}>
                    <TableCell className="font-medium whitespace-nowrap">{hw.subject}</TableCell>
                    <TableCell className="whitespace-nowrap">{hw.assignment}</TableCell>
                    <TableCell className="whitespace-nowrap">{hw.dueDate}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={hw.status === 'Completed' ? 'default' : 'secondary'} className={`whitespace-nowrap ${hw.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {hw.status}
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
