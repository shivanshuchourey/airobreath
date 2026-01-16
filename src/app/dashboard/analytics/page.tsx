'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart, Area, AreaChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const aqiData = [
  { date: 'May 1', aqi: 35 },
  { date: 'May 2', aqi: 42 },
  { date: 'May 3', aqi: 38 },
  { date: 'May 4', aqi: 45 },
  { date: 'May 5', aqi: 32 },
  { date: 'May 6', aqi: 28 },
  { date: 'May 7', aqi: 30 },
];

const pollutantData = [
  { name: 'PM2.5', value: 12, fill: 'var(--color-pm25)' },
  { name: 'PM10', value: 25, fill: 'var(--color-pm10)' },
  { name: 'CO₂', value: 450, fill: 'var(--color-co2)' },
];

const waterData = [
    { month: 'Jan', nutrients: 186, water: 80 },
    { month: 'Feb', nutrients: 305, water: 200 },
    { month: 'Mar', nutrients: 237, water: 120 },
    { month: 'Apr', nutrients: 73, water: 190 },
    { month: 'May', nutrients: 209, water: 130 },
    { month: 'Jun', nutrients: 214, water: 140 },
]

const plantGrowthData = [
    {
      subject: 'Height',
      A: 80,
      fullMark: 100,
    },
    {
      subject: 'Leaf Density',
      A: 90,
      fullMark: 100,
    },
    {
      subject: 'Water Uptake',
      A: 85,
      fullMark: 100,
    },
    {
      subject: 'Nutrient Absorption',
      A: 70,
      fullMark: 100,
    },
    {
      subject: 'Fruit Production',
      A: 65,
      fullMark: 100,
    },
]

const chartConfigAqi = {
  aqi: {
    label: 'AQI',
    color: 'hsl(var(--primary))',
  },
};

const chartConfigPollutant = {
  value: {
    label: 'Value',
  },
  pm25: {
    label: 'PM2.5 (µg/m³)',
    color: 'hsl(var(--chart-1))',
  },
  pm10: {
    label: 'PM10 (µg/m³)',
    color: 'hsl(var(--chart-2))',
  },
  co2: {
    label: 'CO₂ (ppm)',
    color: 'hsl(var(--chart-3))',
  }
};

const chartConfigWater = {
    water: {
      label: 'Water Level',
      color: 'hsl(var(--chart-1))',
    },
    nutrients: {
      label: 'Nutrient Level',
      color: 'hsl(var(--chart-2))',
    },
}

const chartConfigPlantGrowth = {
    basil: {
      label: 'Basil',
      color: 'hsl(var(--chart-1))',
    },
}

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">
            Explore detailed analytics about your Airobreath system.
          </p>
        </div>
         <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Last 7 Days" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="7">Last 7 Days</SelectItem>
                <SelectItem value="30">Last 30 Days</SelectItem>
                <SelectItem value="90">Last 90 Days</SelectItem>
            </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Air Quality Index (AQI) - Last 7 Days</CardTitle>
            <CardDescription>
                A visual representation of the air quality over the past week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfigAqi} className="min-h-[250px] w-full">
              <LineChart data={aqiData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line dataKey="aqi" type="monotone" stroke="var(--color-aqi)" strokeWidth={2} dot={true} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Pollutant Levels</CardTitle>
            <CardDescription>
                Breakdown of common indoor air pollutants.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfigPollutant} className="min-h-[250px] w-full">
                <BarChart data={pollutantData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="name" tickLine={false} tickMargin={10} axisLine={false} />
                    <YAxis />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                    <Bar dataKey="value" radius={8}>
                      {pollutantData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

         <Card>
          <CardHeader>
            <CardTitle>Reservoir Levels</CardTitle>
            <CardDescription>
              Monthly trends for water and nutrient solution levels in the reservoir.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfigWater} className="min-h-[250px] w-full">
              <AreaChart
                accessibilityLayer
                data={waterData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                 <YAxis />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                 <ChartLegend content={<ChartLegendContent />} />
                <Area
                  dataKey="water"
                  type="natural"
                  fill="var(--color-water)"
                  fillOpacity={0.4}
                  stroke="var(--color-water)"
                  stackId="a"
                />
                <Area
                  dataKey="nutrients"
                  type="natural"
                  fill="var(--color-nutrients)"
                  fillOpacity={0.4}
                  stroke="var(--color-nutrients)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plant Growth Analytics - Basil</CardTitle>
            <CardDescription>
                Key growth metrics for your Basil plant.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
             <ChartContainer
              config={chartConfigPlantGrowth}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <RadarChart
                data={plantGrowthData}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <PolarGrid />
                <Radar
                  name="Basil"
                  dataKey="A"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
