
import { NoteGenerator } from "@/components/note-generator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Study Companion</h1>
        <p className="text-muted-foreground">
          Automatically generate notes from classroom recordings.
        </p>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>AI Note Generator</CardTitle>
          <CardDescription>
            Upload an audio or video file of a class lecture, and our AI will
            create a structured summary with key points for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NoteGenerator />
        </CardContent>
      </Card>
    </div>
  );
}
