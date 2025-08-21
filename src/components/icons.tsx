import type { SVGProps } from "react";

export const NoteSnapLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 4L4 8l8 4 8-4-8-4z" fill="hsl(var(--accent))" />
    <path d="M4 12l8 4 8-4" />
    <path d="M4 16l8 4 8-4" />
    <path d="M20 10.5v4.5" />
    <path d="M12 20V10" />
    <circle cx="12" cy="10" r="2" fill="hsl(var(--primary))" stroke="hsl(var(--background))" />
  </svg>
);
