'use client';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and system preferences.
        </p>
      </div>
      <Tabs defaultValue="account">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>My Account</CardTitle>
              <CardDescription>
                Update your profile and account information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Premium User" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="premium.user@airobreath.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Button variant="outline">Change Password</Button>
              </div>
               <div className="space-y-2">
                <Label>Subscription</Label>
                <div className='flex items-center justify-between rounded-md border border-muted p-4'>
                    <div>
                        <p className='font-medium'>Premium Pro</p>
                        <p className='text-sm text-muted-foreground'>Next billing date: 2024-08-01</p>
                    </div>
                    <Button>Manage Plan</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the look and feel of your app.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <Select defaultValue="system">
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Accent Color</Label>
                 <div className="flex gap-2">
                    <Button variant="outline" className="h-8 w-8 rounded-full border-primary bg-primary"></Button>
                    <Button variant="outline" className="h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600"></Button>
                    <Button variant="outline" className="h-8 w-8 rounded-full bg-red-500 hover:bg-red-600"></Button>
                    <Button variant="outline" className="h-8 w-8 rounded-full bg-purple-500 hover:bg-purple-600"></Button>
                    <Button variant="outline" className="h-8 w-8 rounded-full bg-orange-500 hover:bg-orange-600"></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Choose how you want to be notified.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className='space-y-4'>
                    <h3 className='font-medium'>Email Notifications</h3>
                    <div className="flex items-center justify-between rounded-md border p-4">
                        <Label htmlFor="email-weekly-reports" className='flex flex-col gap-1'>
                            <span>Weekly Reports</span>
                            <span className='font-normal text-muted-foreground'>Get a summary of your system's performance every week.</span>
                        </Label>
                        <Switch id="email-weekly-reports" defaultChecked/>
                    </div>
                     <div className="flex items-center justify-between rounded-md border p-4">
                        <Label htmlFor="email-system-alerts" className='flex flex-col gap-1'>
                            <span>System Alerts</span>
                            <span className='font-normal text-muted-foreground'>Receive alerts for low water, nutrient levels, and other critical issues.</span>
                        </Label>
                        <Switch id="email-system-alerts" defaultChecked/>
                    </div>
                </div>
                 <div className='space-y-4'>
                    <h3 className='font-medium'>Push Notifications</h3>
                    <div className="flex items-center justify-between rounded-md border p-4">
                        <Label htmlFor="push-plant-milestones" className='flex flex-col gap-1'>
                            <span>Plant Milestones</span>
                            <span className='font-normal text-muted-foreground'>Get notified when your plants reach new growth stages.</span>
                        </Label>
                        <Switch id="push-plant-milestones" defaultChecked/>
                    </div>
                     <div className="flex items-center justify-between rounded-md border p-4">
                        <Label htmlFor="push-air-quality" className='flex flex-col gap-1'>
                            <span>Air Quality Changes</span>
                            <span className='font-normal text-muted-foreground'>Receive alerts when indoor air quality changes significantly.</span>
                        </Label>
                        <Switch id="push-air-quality" />
                    </div>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
         <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle>System</CardTitle>
              <CardDescription>
                Manage your Airobreath device settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="space-y-2">
                <Label>Device Information</Label>
                <div className='flex items-center justify-between rounded-md border border-muted p-4'>
                    <div>
                        <p className='font-medium'>Airobreath Tower v1.2</p>
                        <p className='text-sm text-muted-foreground'>Serial Number: AB-123-XYZ-789</p>
                    </div>
                    <Button variant="outline">Check for Updates</Button>
                </div>
              </div>
              <div className="space-y-4">
                <Label>Light Schedule</Label>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="light-on" className="text-sm text-muted-foreground">Lights On Time</Label>
                        <Input id="light-on" type="time" defaultValue="07:00"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="light-off" className="text-sm text-muted-foreground">Lights Off Time</Label>
                        <Input id="light-off" type="time" defaultValue="21:00"/>
                    </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-md border p-4">
                <Label htmlFor="fan-mode" className='flex flex-col gap-1'>
                    <span>Continuous Fan</span>
                    <span className='font-normal text-muted-foreground'>Keep the fan running for constant air circulation.</span>
                </Label>
                <Switch id="fan-mode" />
              </div>
               <Button variant="destructive">Factory Reset Device</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
