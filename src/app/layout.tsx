import type { Metadata } from 'next';
import { Inter, Lilita_One } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const lilitaOne = Lilita_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lilita-one',
});

export const metadata: Metadata = {
  title: 'FitKidz - Play, Grow, and Learn',
  description: 'Play, Grow, and Learn with FitKidz. The Future of Learning, Today. Live classroom streaming, AI-powered tools, and seamless parent-teacher communication.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lilitaOne.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
