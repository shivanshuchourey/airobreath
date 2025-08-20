"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Video,
  Clipboard,
  BotMessageSquare,
  MessageSquare,
  LogOut,
} from "lucide-react";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NoteSnapLogo } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/streaming", icon: Video, label: "Live Stream" },
  { href: "/dashboard/whiteboard", icon: Clipboard, label: "Whiteboard" },
  { href: "/dashboard/notes", icon: BotMessageSquare, label: "AI Notes" },
  { href: "/dashboard/chat", icon: MessageSquare, label: "Chat" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <NoteSnapLogo className="w-8 h-8 text-primary" />
            <span className="text-lg font-semibold">NoteSnap</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={{ children: item.label }}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3">
             <Avatar>
                <AvatarImage src="https://placehold.co/40x40.png" alt="@parent" data-ai-hint="person woman" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-sm">
                <span className="font-semibold">Jane Doe</span>
                <span className="text-muted-foreground">Parent</span>
              </div>
          </div>
          <Link href="/" className="w-full">
            <Button variant="outline" size="sm" className="w-full justify-start gap-2">
              <LogOut size={16} />
              <span>Logout</span>
            </Button>
          </Link>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="p-4 md:p-6 lg:p-8">
          <header className="flex items-center justify-between md:hidden mb-4">
             <Link href="/dashboard" className="flex items-center gap-2">
                <NoteSnapLogo className="w-7 h-7 text-primary" />
                <span className="text-md font-semibold">NoteSnap</span>
              </Link>
              <SidebarTrigger />
          </header>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
