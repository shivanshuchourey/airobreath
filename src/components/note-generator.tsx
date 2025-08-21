"use client";

import { useState } from "react";
import { generateNotes } from "@/ai/flows/auto-note-generator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, UploadCloud, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export function NoteGenerator() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [generatedNotes, setGeneratedNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleGenerateNotes = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a classroom recording first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setGeneratedNotes("");

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const recordingDataUri = reader.result as string;
        const result = await generateNotes({ recordingDataUri });
        setGeneratedNotes(result.notes);
      };

      reader.onerror = () => {
        throw new Error("Failed to read the file.");
      };
    } catch (error) {
      console.error("Error generating notes:", error);
      toast({
        title: "Generation Failed",
        description: "Something went wrong while generating notes. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <Label htmlFor="recording-upload">Upload Recording</Label>
        <div className="relative">
          <Button asChild variant="outline" className="w-full justify-start text-muted-foreground">
            <div>
              <UploadCloud className="mr-2 h-4 w-4" />
              {fileName || "Click to upload a file..."}
            </div>
          </Button>
          <Input
            id="recording-upload"
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            accept="audio/*,video/*"
            disabled={isLoading}
          />
        </div>
      </div>
      
      <Button onClick={handleGenerateNotes} disabled={isLoading || !file} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Generate Notes
          </>
        )}
      </Button>
      
      {generatedNotes && (
        <Card>
          <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Generated Notes</h3>
              <Textarea
                value={generatedNotes}
                readOnly
                className="w-full h-96 text-sm bg-secondary"
                placeholder="Your generated notes will appear here."
              />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
