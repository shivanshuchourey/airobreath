'use client';

import {
  Wind,
  Cloud,
  Leaf,
  BarChart,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

function getAqiColor(aqi: number) {
  if (aqi <= 50) return 'text-green-500';
  if (aqi <= 100) return 'text-yellow-500';
  if (aqi <= 150) return 'text-orange-500';
  if (aqi <= 200) return 'text-red-500';
  if (aqi <= 300) return 'text-purple-500';
  return 'text-red-700';
}
function getAqiBgColor(aqi: number) {
  if (aqi <= 50) return 'bg-green-500/10';
  if (aqi <= 100) return 'bg-yellow-500/10';
  if (aqi <= 150) return 'bg-orange-500/10';
  if (aqi <= 200) return 'bg-red-500/10';
  if (aqi <= 300) return 'bg-purple-500/10';
  return 'bg-red-700/10';
}
function getAqiText(aqi: number) {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
}

export default function DashboardPage() {
    const aqi = 42;
    const waterLevel = 75;

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card className="sm:col-span-2">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle>Air Quality Index (AQI)</CardTitle>
                <Wind className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className={`text-6xl font-bold ${getAqiColor(aqi)}`}>{aqi}</div>
                <p className={`text-xs text-muted-foreground font-semibold px-2 py-1 rounded-full inline-block ${getAqiColor(aqi)} ${getAqiBgColor(aqi)}`}>
                    {getAqiText(aqi)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">Your air is clean and fresh. Perfect for a healthy living environment.</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Temperature</CardDescription>
                <CardTitle className="text-4xl">22°C</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">Optimal range: 20-24°C</div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Humidity</CardDescription>
                <CardTitle className="text-4xl">45%</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">Optimal range: 40-60%</div>
            </CardContent>
        </Card>
      </div>

       <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mt-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">PM2.5</CardTitle>
                    <Cloud className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12 µg/m³</div>
                    <p className="text-xs text-muted-foreground">Below WHO guideline</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">PM10</CardTitle>
                    <Cloud className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">25 µg/m³</div>
                    <p className="text-xs text-muted-foreground">Below WHO guideline</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">CO₂ Level</CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">450 ppm</div>
                    <p className="text-xs text-muted-foreground">Excellent indoor air</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Plant Health</CardTitle>
                    <Leaf className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-green-500">Healthy</div>
                    <p className="text-xs text-muted-foreground">Your plants are thriving</p>
                </CardContent>
            </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-8">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Water Level</CardTitle>
            <CardDescription>
              Your hydroponic tower's water reservoir is at {waterLevel}%.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={waterLevel} aria-label={`${waterLevel}% full`} />
            <div className='flex justify-between text-xs text-muted-foreground mt-2'>
                <span>Refill recommended at 20%</span>
                <span>Last refilled: 3 days ago</span>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
