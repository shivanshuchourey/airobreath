'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Fingerprint, Mail, Smartphone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppleIcon, GoogleIcon } from '@/components/icons';
import placeholderImages from '@/lib/placeholder-images.json';

export default function LoginPage() {
  const router = useRouter();

  const handleSignIn = () => {
    // In a real app, you'd perform authentication here
    router.push('/dashboard');
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        <Image
          src={`https://picsum.photos/seed/${placeholderImages.login.seed}/${placeholderImages.login.width}/${placeholderImages.login.height}`}
          alt="Airobreath Hydroponic System"
          width={placeholderImages.login.width}
          height={placeholderImages.login.height}
          data-ai-hint={placeholderImages.login.hint}
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-balance text-muted-foreground">
              Sign in to manage your Airobreath system
            </p>
          </div>
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="email">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="email">
                    <Mail className="mr-2 h-4 w-4" /> Email
                  </TabsTrigger>
                  <TabsTrigger value="phone">
                    <Smartphone className="mr-2 h-4 w-4" /> Phone
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="email" className="space-y-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="#"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    onClick={handleSignIn}
                  >
                    Sign In
                  </Button>
                </TabsContent>
                <TabsContent value="phone" className="space-y-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    onClick={handleSignIn}
                  >
                    Send OTP
                  </Button>
                </TabsContent>
              </Tabs>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={handleSignIn}>
                  <GoogleIcon className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" onClick={handleSignIn}>
                  <AppleIcon className="mr-2 h-4 w-4" />
                  Apple
                </Button>
              </div>

              <div className="mt-6 text-center text-sm">
                <Link href="/dashboard" className="underline">
                  Continue as Guest
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Premium users can use biometrics.</p>
            <Button variant="ghost" className="mt-2" onClick={handleSignIn}>
              <Fingerprint className="mr-2 h-4 w-4" />
              Sign in with Face ID / Fingerprint
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
