"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", math: 85, science: 78 },
  { month: "February", math: 88, science: 82 },
  { month: "March", math: 90, science: 84 },
  { month: "April", math: 87, science: 80 },
  { month: "May", math: 92, science: 86 },
  { month: "June", math: 95, science: 89 },
  { month: "July", math: 91, science: 88 },
  { month: "August", math: 89, science: 85 },
  { month: "September", math: 93, science: 87 },
  { month: "October", math: 94, science: 90 },
  { month: "November", math: 90, science: 88 },
  { month: "December", math: 92, science: 91 },
];

const chartConfig = {
  math: {
    label: "Math",
    color: "hsl(var(--chart-1))",
    icon: TrendingUp,
  },
  science: {
    label: "Science",
    color: "hsl(var(--chart-2))",
    icon: TrendingDown,
  },
} satisfies ChartConfig;

export function StudentGradeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Grades</CardTitle>
        <CardDescription>
          Showing grade trends for Math and Science over the last 12 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-40 w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
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
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="science"
              type="natural"
              fill="var(--color-science)"
              fillOpacity={0.4}
              stroke="var(--color-science)"
              stackId="a"
            />
            <Area
              dataKey="math"
              type="natural"
              fill="var(--color-math)"
              fillOpacity={0.4}
              stroke="var(--color-math)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Overall grade trend for the year{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - December 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
