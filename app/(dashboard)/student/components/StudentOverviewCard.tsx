import { StudentLabelChart } from "@/components/charts/StudentLabelChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function StudentOverviewCard({
  name = "John Doe",
  points = 1250,
  level = "Gold",
}: {
  name?: string;
  points?: number;
  level?: string;
}) {
  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardContent className="flex flex-col items-center space-x-4 p-6">
        <div className="flex w-full items-center justify-between space-x-4 p-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{name}</h2>
              <Badge variant="secondary">{level}</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              Student ID:{" "}
              {Math.floor(Math.random() * 1000000)
                .toString()
                .padStart(6, "0")}
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-medium">Total Points:</span>
              <span className="text-xl font-bold">
                {points.toLocaleString()}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className={`h-full rounded-full bg-primary w-[${(points % 1000) / 10}%]`}
                // style={{ width: `${(points % 1000) / 10}%` }}
                role="progressbar"
                aria-valuenow={points % 1000}
                aria-valuemin={0}
                aria-valuemax={1000}
                // title="d"
              />
            </div>
            <p className="text-right text-xs text-muted-foreground">
              {1000 - (points % 1000)} points to next level
            </p>
          </div>
        </div>
        <StudentLabelChart />
      </CardContent>
    </Card>
  );
}
