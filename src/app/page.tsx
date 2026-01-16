
import { Button } from "@/components/ui/button";
import { MountainIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

function AirobreathIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12a5 5 0 0 1 5 5" />
      <path d="M12 7a5 5 0 0 1 5 5" />
      <path d="M12 12a5 5 0 0 0-5 5" />
      <path d="M12 17a5 5 0 0 0-5-5" />
      <path d="M2 12a10 10 0 0 1 10-10" />
      <path d="M2 12a10 10 0 0 0 10 10" />
      <path d="M22 12a10 10 0 0 0-10-10" />
      <path d="M22 12a10 10 0 0 1-10 10" />
    </svg>
  );
}


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <AirobreathIcon className="h-6 w-6" />
        <span className="sr-only">Airobreath</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
    </header>
    <main className="flex-1">
      <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Breathe Clean, Live Smart
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Airobreath is a revolutionary hydroponic tower that purifies your air while adding a touch of nature to
                  your space.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/login">Get Started</Link>
                </Button>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              data-ai-hint="hydroponic tower"
              height="550"
              src="https://picsum.photos/seed/1/550/550"
              width="550"
            />
          </div>
        </div>
      </section>
    </main>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">© 2024 Airobreath. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  </div>
  );
}

