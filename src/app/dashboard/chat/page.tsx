import Image from "next/image";
import { Paperclip, Send, Smile } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const contacts = [
  { name: "Mr. Alan", subject: "Math Teacher", avatar: "https://placehold.co/40x40.png", aiHint: "person man" },
  { name: "Ms. Brie", subject: "Science Teacher", avatar: "https://placehold.co/40x40.png", aiHint: "person woman" },
  { name: "Principal Davis", subject: "School Principal", avatar: "https://placehold.co/40x40.png", aiHint: "person man" },
  { name: "Class Group", subject: "Grade 4 Announcements", avatar: "https://placehold.co/40x40.png", aiHint: "people group" },
];

const messages = [
  { from: "teacher", text: "Hi Jane, just wanted to let you know that Alex did a great job on the math test today!", time: "3:40 PM" },
  { from: "parent", text: "That's wonderful to hear! Thanks for the update, Mr. Alan.", time: "3:42 PM" },
  { from: "teacher", text: "You're welcome! Also, a quick reminder about the parent-teacher meeting next Friday.", time: "3:43 PM" },
];

export default function ChatPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Parent-Teacher Chat</h1>
        <p className="text-muted-foreground">
          Direct and secure communication with school staff.
        </p>
      </div>

      <Card className="h-[70vh] shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          <div className="md:col-span-1 border-r">
            <CardHeader>
              <CardTitle>Contacts</CardTitle>
              <CardDescription>Select a conversation to start chatting.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {contacts.map((contact, index) => (
                  <li key={contact.name}>
                    <Button
                      variant={index === 0 ? "secondary" : "ghost"}
                      className="w-full h-auto justify-start p-3"
                    >
                      <Avatar className="mr-3">
                        <AvatarImage src={contact.avatar} data-ai-hint={contact.aiHint} />
                        <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="font-semibold">{contact.name}</p>
                        <p className="text-xs text-muted-foreground">{contact.subject}</p>
                      </div>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>
          
          <div className="md:col-span-2 flex flex-col h-full">
            <div className="p-4 border-b flex items-center gap-4">
              <Avatar>
                 <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="person man" />
                 <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Mr. Alan</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-secondary/30">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-end gap-2 ${msg.from === 'parent' ? 'justify-end' : 'justify-start'}`}>
                  {msg.from === 'teacher' && <Avatar className="h-8 w-8"><AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="person man" /><AvatarFallback>A</AvatarFallback></Avatar>}
                  <div className={`rounded-lg px-4 py-2 max-w-xs lg:max-w-md ${msg.from === 'parent' ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 text-right mt-1">{msg.time}</p>
                  </div>
                   {msg.from === 'parent' && <Avatar className="h-8 w-8"><AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="person woman" /><AvatarFallback>J</AvatarFallback></Avatar>}
                </div>
              ))}
            </div>

            <div className="p-4 border-t bg-card">
              <div className="relative">
                <Input placeholder="Type a message..." className="pr-28" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
                  <Button variant="ghost" size="icon"><Smile className="h-5 w-5 text-muted-foreground" /></Button>
                  <Button variant="ghost" size="icon"><Paperclip className="h-5 w-5 text-muted-foreground" /></Button>
                  <Button size="sm" className="bg-accent hover:bg-accent/90"><Send className="h-4 w-4" /></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
