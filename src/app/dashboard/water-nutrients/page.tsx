'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Droplets,
  PlusCircle,
  Thermometer,
  Zap,
  CalendarDays,
  RefreshCw,
} from 'lucide-react';

const waterLevel = 75;
const nutrientLevel = 60;
const phLevel = 6.2;
const ecLevel = 1.8;
const waterTemp = 21;

const dosingSchedule = [
  { nutrient: 'FloraGro', day: 'Monday', time: '9:00 AM', status: 'Completed' },
  {
    nutrient: 'FloraBloom',
    day: 'Wednesday',
    time: '9:00 AM',
    status: 'Completed',
  },
  {
    nutrient: 'FloraMicro',
    day: 'Friday',
    time: '9:00 AM',
    status: 'Upcoming',
  },
  { nutrient: 'Cal-Mag', day: 'Sunday', time: '9:00 AM', status: 'Upcoming' },
];

export default function WaterNutrientsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Water & Nutrients</h1>
          <p className="text-muted-foreground">
            Monitor and manage your system's water and nutrient levels.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Refill Reservoir
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Water Level</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{waterLevel}%</div>
            <p className="text-xs text-muted-foreground">
              Last refilled 3 days ago
            </p>
          </CardContent>
          <CardFooter>
            <Progress value={waterLevel} aria-label={`${waterLevel}% full`} />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Nutrient Solution
            </CardTitle>
            <Droplets className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{nutrientLevel}%</div>
            <p className="text-xs text-muted-foreground">
              Optimal concentration
            </p>
          </CardContent>
          <CardFooter>
            <Progress
              value={nutrientLevel}
              aria-label={`${nutrientLevel}% full`}
            />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Water Temperature
            </CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{waterTemp}°C</div>
            <p className="text-xs text-muted-foreground">
              Optimal range: 18-22°C
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">pH Level</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{phLevel}</div>
            <p className="text-xs text-muted-foreground">
              Optimal range: 5.5-6.5
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Conductivity (EC)
            </CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ecLevel} mS/cm</div>
            <p className="text-xs text-muted-foreground">
              Target: 1.6-2.4 mS/cm
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Consumption</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">1.2 L / day</div>
            <p className="text-xs text-muted-foreground">
              Average water usage
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Nutrient Dosing Schedule</CardTitle>
          <CardDescription>
            Weekly schedule for automated nutrient dosing.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nutrient</TableHead>
                <TableHead>Day</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dosingSchedule.map((dose) => (
                <TableRow key={dose.nutrient}>
                  <TableCell className="font-medium">{dose.nutrient}</TableCell>
                  <TableCell>{dose.day}</TableCell>
                  <TableCell>{dose.time}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={
                        dose.status === 'Completed' ? 'secondary' : 'default'
                      }
                    >
                      {dose.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
