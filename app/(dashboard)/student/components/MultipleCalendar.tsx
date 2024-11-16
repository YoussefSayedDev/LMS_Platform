"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addDays, format } from "date-fns";
import * as React from "react";
import { DateRange } from "react-day-picker";

export default function MultipleCalendar() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Date Range Selection</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          className="rounded-md border shadow"
          numberOfMonths={2}
        />
      </CardContent>
      <CardFooter>
        {dateRange?.from && (
          <p className="text-sm">
            Selected range:{" "}
            <span className="font-semibold">
              {format(dateRange.from, "PPP")}
            </span>
            {dateRange.to && (
              <>
                {" "}
                -{" "}
                <span className="font-semibold">
                  {format(dateRange.to, "PPP")}
                </span>
              </>
            )}
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
