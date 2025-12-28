
import type { SVGProps } from "react";

export const RainbowSchoolLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 90 A 40 40 0 0 1 90 90"
      stroke="red"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <path
      d="M20 90 A 30 30 0 0 1 80 90"
      stroke="orange"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <path
      d="M30 90 A 20 20 0 0 1 70 90"
      stroke="yellow"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <path
      d="M40 90 A 10 10 0 0 1 60 90"
      stroke="green"
      strokeWidth="10"
      strokeLinecap="round"
    />
  </svg>
);


export const FitKidzLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <rect width="100" height="100" rx="20" fill="currentColor" />
        <text x="50" y="62" textAnchor="middle" fill="white" fontSize="50" fontWeight="bold">FK</text>
    </svg>
  );
