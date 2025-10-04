
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { User, ShieldCheck, HeartPulse, Save } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <User className="h-8 w-8" />
          Edit Profile
        </h1>
        <p className="text-muted-foreground">
          View and update student profile information.
        </p>
      </div>

      <form className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="text-primary" />
              Student Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName">नाम (Full Name)</Label>
              <Input id="fullName" placeholder="Enter full name" defaultValue="Alex Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dob">जन्मतिथि (Date of Birth)</Label>
              <Input id="dob" type="date" defaultValue="2016-05-10" />
              <p className="text-xs text-muted-foreground">
                Training level will be decided based on age.
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gender">लिंग (Gender)</Label>
              <Select defaultValue="male">
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="class">कक्षा (Class)</Label>
                    <Input id="class" placeholder="e.g. 4th" defaultValue="4th" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="rollNo">रोल नंबर (Roll no.)</Label>
                    <Input id="rollNo" placeholder="e.g. 21" defaultValue="21" />
                </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="schoolId">School ID / Registration no.</Label>
              <Input id="schoolId" placeholder="Enter school registration number" defaultValue="TRS-2024-00123" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="text-primary" />
              Guardian & Contact Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="guardianName">Parent / Guardian का नाम</Label>
              <Input id="guardianName" placeholder="Enter parent/guardian name" defaultValue="Jane Doe" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" type="tel" placeholder="Enter mobile number" defaultValue="+91 98765 43210" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter email address" defaultValue="jane.doe@example.com" />
              <p className="text-xs text-muted-foreground">
                Used for OTP login, communication, and consent.
              </p>
            </div>
             <div className="grid gap-2">
              <Label htmlFor="address">घर का पता (Home Address)</Label>
              <Textarea id="address" placeholder="Enter home address (optional, for emergencies)" defaultValue="123, Rainbow Apartments, Sunshine Colony, New Delhi - 110001" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input id="emergencyContact" type="tel" placeholder="Enter another emergency number" defaultValue="+91 98765 11111" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeartPulse className="text-primary" />
              Sports & Health Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input id="height" type="number" placeholder="e.g. 140" defaultValue="142" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" type="number" placeholder="e.g. 35" defaultValue="36" />
                </div>
            </div>
             <div className="grid gap-2">
              <Label htmlFor="medicalNotes">Medical notes / Allergies / Special Conditions</Label>
              <Textarea id="medicalNotes" placeholder="e.g. Asthma, heart issue, injury history" defaultValue="Mild dust allergy." />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="sportsPreference">Sports Preference / Skills</Label>
              <Input id="sportsPreference" placeholder="Which sport does the child want to learn?" defaultValue="Soccer, Tennis" />
            </div>
             <div className="grid gap-2">
              <Label>Injury Reports</Label>
              <Textarea placeholder="No injuries reported." readOnly className="bg-secondary" />
            </div>
          </CardContent>
        </Card>
        
        <Button size="lg" className="w-full">
            Save Changes
            <Save className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
