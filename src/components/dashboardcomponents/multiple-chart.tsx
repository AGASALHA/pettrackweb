import { TrendingUp } from "lucide-react"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  { locale: "North", safe: 73, lost: 190 },
  { locale: "Northeast", safe: 209, lost: 130 },
  { locale: "South", safe: 186, lost: 80 },
  { locale: "Southeast", safe: 305, lost: 200 },
  { locale: "Center", safe: 237, lost: 120 },
  { locale: "Centerwest", safe: 121, lost: 227 },
]

const chartConfig = {
  safe: {
    label: "Safe",
    color: "#0533eb",
  },
  lost: {
    label: "Lost",
    color: "#ff930f",
  },
} satisfies ChartConfig

export function PetsMonitor() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Overview of all pets</CardTitle>
        <CardDescription>Current year 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="locale"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="safe" fill="#0533eb" radius={4} />
            <Bar dataKey="lost" fill="#ff930f" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% in lost pets in this year <TrendingUp className="w-4 h-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
