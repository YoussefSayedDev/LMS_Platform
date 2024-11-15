"use client";

import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Course } from "@/types/courses";

const chartConfig = {
  progress: {
    label: "Course Progress",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface CourseCardProps {
  course: Course;
}

// Helper function to get the color based on progress (for completed and remaining parts)
const getColorForCompletedProgress = (progress: number): string => {
  if (progress < 30) return "#FF0000"; // Red for low progress
  if (progress < 70) return "#FFCC00"; // Yellow for medium progress
  return "#00FF00"; // Green for high progress
};

export function CourseCard({ course }: CourseCardProps) {
  // Chart data with progress and remaining progress
  const chartData = [
    {
      name: course.name,
      progress: course.progress,
      fill: getColorForCompletedProgress(course.progress), // Color for completed progress
    },
    {
      name: course.name,
      progress: 100 - course.progress, // Remaining progress (100% - current progress)
      fill: "#E0E0E0", // Color for remaining progress (light gray or any other color)
    },
  ];

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={-270}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            {/* Completed Progress */}
            <RadialBar dataKey="progress" background cornerRadius={10} />
            {/* Remaining Progress */}
            <RadialBar dataKey="progress" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {course.progress}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Course Completed
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by {course.growthRate}% this month{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing progress for {course.name}
        </div>
      </CardFooter>
    </Card>
  );
}
