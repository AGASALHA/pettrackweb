
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
  { breed: "Dog", amount: 186 },
  { breed: "Cat", amount: 305 },
  { breed: "Hamster", amount: 237 },
  { breed: "Guinea pig", amount: 273 },
  { breed: "Rabbit", amount: 209 },
  { breed: "Parrot", amount: 214 },
]

const chartConfig = {
  amount: {
    label: "Amount",
    color: "#facc14",
  },
} satisfies ChartConfig

export function LostTypeOfPets() {
  return (
    <Card className="col-span-3">
      <CardHeader className="items-center">
        <CardTitle>Radar of most lost breed</CardTitle>
        <CardDescription>
          Showing total of lost pets for each breed
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[450px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="breed" />
            <PolarGrid />
            <Radar
              dataKey="amount"
              fill="#facc14"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          November - 2024
        </div>
      </CardFooter>
    </Card>
  )
}
