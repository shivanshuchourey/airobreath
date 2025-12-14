
"use client";

import { useState } from "react";
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
import { User, ShieldCheck, HeartPulse, Save, Camera } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    fullName: "Alex Doe",
    dob: "2016-05-10",
    gender: "male",
    class: "4th",
    rollNo: "21",
    schoolId: "TRS-2024-00123",
    guardianName: "Jane Doe",
    mobile: "+91 98765 43210",
    email: "jane.doe@example.com",
    address: "123, Rainbow Apartments, Sunshine Colony, New Delhi - 110001",
    emergencyContact: "+91 98765 11111",
    height: "142",
    weight: "36",
    medicalNotes: "Mild dust allergy.",
    sportsPreference: "Soccer, Tennis",
    injuryReports: "No injuries reported.",
    avatar: "https://placehold.co/128x128.png",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setProfileData((prev) => ({ ...prev, [id]: value }));
  };
  
  const handleSelectChange = (id: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your changes have been saved successfully.",
    });
    console.log("Updated Profile Data:", profileData);
  };

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

      <form onSubmit={handleSubmit} className="space-y-8">

        <Card>
          <CardContent className="pt-6 flex flex-col items-center gap-4">
             <div className="relative">
                <Avatar className="h-32 w-32">
                    <AvatarImage src={profileData.avatar} alt="Student Avatar" data-ai-hint="person boy" />
                    <AvatarFallback>{profileData.fullName.charAt(0)}</AvatarFallback>
                </Avatar>
                <Label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90">
                    <Camera className="h-5 w-5" />
                </Label>
                <Input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">{profileData.fullName}</h2>
                <p className="text-muted-foreground">{profileData.schoolId}</p>
            </div>
          </CardContent>
        </Card>

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
              <Input id="fullName" placeholder="Enter full name" value={profileData.fullName} onChange={handleInputChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dob">जन्मतिथि (Date of Birth)</Label>
              <Input id="dob" type="date" value={profileData.dob} onChange={handleInputChange} />
              <p className="text-xs text-muted-foreground">
                Training level will be decided based on age.
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gender">लिंग (Gender)</Label>
              <Select value={profileData.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
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
                    <Input id="class" placeholder="e.g. 4th" value={profileData.class} onChange={handleInputChange} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="rollNo">रोल नंबर (Roll no.)</Label>
                    <Input id="rollNo" placeholder="e.g. 21" value={profileData.rollNo} onChange={handleInputChange} />
                </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="schoolId">School ID / Registration no.</Label>
              <Input id="schoolId" placeholder="Enter school registration number" value={profileData.schoolId} onChange={handleInputChange} />
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
              <Input id="guardianName" placeholder="Enter parent/guardian name" value={profileData.guardianName} onChange={handleInputChange} />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" type="tel" placeholder="Enter mobile number" value={profileData.mobile} onChange={handleInputChange} />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter email address" value={profileData.email} onChange={handleInputChange} />
              <p className="text-xs text-muted-foreground">
                Used for OTP login, communication, and consent.
              </p>
            </div>
             <div className="grid gap-2">
              <Label htmlFor="address">घर का पता (Home Address)</Label>
              <Textarea id="address" placeholder="Enter home address (optional, for emergencies)" value={profileData.address} onChange={handleInputChange} />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input id="emergencyContact" type="tel" placeholder="Enter another emergency number" value={profileData.emergencyContact} onChange={handleInputChange} />
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
                    <Input id="height" type="number" placeholder="e.g. 140" value={profileData.height} onChange={handleInputChange} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" type="number" placeholder="e.g. 35" value={profileData.weight} onChange={handleInputChange} />
                </div>
            </div>
             <div className="grid gap-2">
              <Label htmlFor="medicalNotes">Medical notes / Allergies / Special Conditions</Label>
              <Textarea id="medicalNotes" placeholder="e.g. Asthma, heart issue, injury history" value={profileData.medicalNotes} onChange={handleInputChange} />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="sportsPreference">Sports Preference / Skills</Label>
              <Input id="sportsPreference" placeholder="Which sport does the child want to learn?" value={profileData.sportsPreference} onChange={handleInputChange} />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="injuryReports">Injury Reports</Label>
              <Textarea id="injuryReports" placeholder="Log any injuries here..." value={profileData.injuryReports} onChange={handleInputChange} />
            </div>
          </CardContent>
        </Card>
        
        <Button type="submit" size="lg" className="w-full">
            Save Changes
            <Save className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}

    