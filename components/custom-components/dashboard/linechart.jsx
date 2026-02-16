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
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  income: {
    label: "Income",
    color: "#00ff11",
    icon: TrendingUp,
  },
  expense: {
    label: "Expense",
    color: "#ff0000",
    icon: TrendingDown,
  },
};

export default function ChartArea({ data }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Spending Overview</CardTitle>

        <CardDescription>Last 6 months</CardDescription>
      </CardHeader>

      <CardContent className="h-70 w-full">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart data={data}>
            <CartesianGrid vertical={false} />

            <XAxis dataKey="month" />

            <ChartTooltip content={<ChartTooltipContent />} />

            <Area
              dataKey="income"
              fill="var(--color-income)"
              stroke="var(--color-income)"
            />

            <Area
              dataKey="expense"
              fill="var(--color-expense)"
              stroke="var(--color-expense)"
            />

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
