
import * as React from "react"

import { TrendingUp } from "lucide-react"

import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { browser: "north", visitors: 145, fill: "hsl(var(--chart-1))" },
  { browser: "northeast", visitors: 182, fill: "hsl(var(--chart-2))" },
  { browser: "south", visitors: 137, fill: "hsl(var(--chart-3))" },
  { browser: "southeast", visitors: 173, fill: "hsl(var(--chart-4))" },
  { browser: "center", visitors: 185, fill: "hsl(var(--chart-5))" },
  { browser: "centerwest", visitors: 303, fill: "hsl(var(--chart-6))" },
]
const chartConfig = {
  users: {
    label: "Users",
  },
  north: {
    label: "North",
    color: "hsl(var(--chart-1))",
  },
  northeast: {
    label: "Northeast",
    color: "hsl(var(--chart-2))",
  },
  south: {
    label: 'South',
    color: 'hsl(var(--chart-3))',
  },
  southeast: {
    label: "Southeast",
    color: "hsl(var(--chart-4))",
  },
  center: {
    label: "Center",
    color: "hsl(var(--chart-5))",
  },
  centerwest: {
    label: "Centerwest",
    color: "hsl(var(--chart-6))",
  },

} satisfies ChartConfig

export function UserByLocale() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col col-span-3">
      <CardHeader className="items-center pb-0">
        <CardTitle>Users by Locale - BRA</CardTitle>
        <CardDescription>July - Dec 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
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
                          className="text-3xl font-bold fill-foreground"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Users
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 10.1% this month <TrendingUp className="w-4 h-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total users active for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
