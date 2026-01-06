"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", pageViews: 222, uniqueReaders: 150, engagement: 456 },
  { date: "2024-04-02", pageViews: 97, uniqueReaders: 180, engagement: 456 },
  { date: "2024-04-03", pageViews: 167, uniqueReaders: 120, engagement: 456 },
  { date: "2024-04-04", pageViews: 242, uniqueReaders: 260, engagement: 456 },
  { date: "2024-04-05", pageViews: 373, uniqueReaders: 290, engagement: 456 },
  { date: "2024-04-06", pageViews: 301, uniqueReaders: 340, engagement: 456 },
  { date: "2024-04-07", pageViews: 245, uniqueReaders: 180, engagement: 456 },
  { date: "2024-04-08", pageViews: 409, uniqueReaders: 320, engagement: 456 },
  { date: "2024-04-09", pageViews: 59, uniqueReaders: 110, engagement: 456 },
  { date: "2024-04-10", pageViews: 261, uniqueReaders: 190, engagement: 456 },
  { date: "2024-04-11", pageViews: 327, uniqueReaders: 350, engagement: 456 },
  { date: "2024-04-12", pageViews: 292, uniqueReaders: 210, engagement: 456 },
  { date: "2024-04-13", pageViews: 342, uniqueReaders: 380, engagement: 456 },
  { date: "2024-04-14", pageViews: 137, uniqueReaders: 220, engagement: 456 },
  { date: "2024-04-15", pageViews: 120, uniqueReaders: 170, engagement: 456 },
  { date: "2024-04-16", pageViews: 138, uniqueReaders: 190, engagement: 456 },
  { date: "2024-04-17", pageViews: 446, uniqueReaders: 360, engagement: 456 },
  { date: "2024-04-18", pageViews: 364, uniqueReaders: 410, engagement: 456 },
  { date: "2024-04-19", pageViews: 243, uniqueReaders: 180, engagement: 456 },
  { date: "2024-04-20", pageViews: 89, uniqueReaders: 150, engagement: 456 },
  { date: "2024-04-21", pageViews: 137, uniqueReaders: 200, engagement: 456 },
  { date: "2024-04-22", pageViews: 224, uniqueReaders: 170, engagement: 456 },
  { date: "2024-04-23", pageViews: 138, uniqueReaders: 230, engagement: 456 },
  { date: "2024-04-24", pageViews: 387, uniqueReaders: 290, engagement: 456 },
  { date: "2024-04-25", pageViews: 215, uniqueReaders: 250, engagement: 456 },
  { date: "2024-04-26", pageViews: 75, uniqueReaders: 130, engagement: 456 },
  { date: "2024-04-27", pageViews: 383, uniqueReaders: 420, engagement: 456 },
  { date: "2024-04-28", pageViews: 122, uniqueReaders: 180, engagement: 456 },
  { date: "2024-04-29", pageViews: 315, uniqueReaders: 240, engagement: 456 },
  { date: "2024-04-30", pageViews: 454, uniqueReaders: 380, engagement: 456 },
  { date: "2024-05-01", pageViews: 165, uniqueReaders: 220, engagement: 456 },
  { date: "2024-05-02", pageViews: 293, uniqueReaders: 310, engagement: 456 },
  { date: "2024-05-03", pageViews: 247, uniqueReaders: 190, engagement: 456 },
  { date: "2024-05-04", pageViews: 385, uniqueReaders: 420, engagement: 456 },
  { date: "2024-05-05", pageViews: 481, uniqueReaders: 390, engagement: 456 },
  { date: "2024-05-06", pageViews: 498, uniqueReaders: 520, engagement: 456 },
  { date: "2024-05-07", pageViews: 388, uniqueReaders: 300, engagement: 456 },
  { date: "2024-05-08", pageViews: 149, uniqueReaders: 210, engagement: 456 },
  { date: "2024-05-09", pageViews: 227, uniqueReaders: 180, engagement: 456 },
  { date: "2024-05-10", pageViews: 293, uniqueReaders: 330, engagement: 456 },
  { date: "2024-05-11", pageViews: 335, uniqueReaders: 270, engagement: 456 },
  { date: "2024-05-12", pageViews: 197, uniqueReaders: 240, engagement: 456 },
  { date: "2024-05-13", pageViews: 197, uniqueReaders: 160, engagement: 456 },
  { date: "2024-05-14", pageViews: 448, uniqueReaders: 490, engagement: 456 },
  { date: "2024-05-15", pageViews: 473, uniqueReaders: 380, engagement: 456 },
  { date: "2024-05-16", pageViews: 338, uniqueReaders: 400, engagement: 456 },
  { date: "2024-05-17", pageViews: 499, uniqueReaders: 420, engagement: 456 },
  { date: "2024-05-18", pageViews: 315, uniqueReaders: 350, engagement: 456 },
  { date: "2024-05-19", pageViews: 235, uniqueReaders: 180, engagement: 456 },
  { date: "2024-05-20", pageViews: 177, uniqueReaders: 230, engagement: 456 },
  { date: "2024-05-21", pageViews: 82, uniqueReaders: 140, engagement: 456 },
  { date: "2024-05-22", pageViews: 81, uniqueReaders: 120, engagement: 456 },
  { date: "2024-05-23", pageViews: 252, uniqueReaders: 290, engagement: 456 },
  { date: "2024-05-24", pageViews: 294, uniqueReaders: 220, engagement: 456 },
  { date: "2024-05-25", pageViews: 201, uniqueReaders: 250, engagement: 456 },
  { date: "2024-05-26", pageViews: 213, uniqueReaders: 170, engagement: 456 },
  { date: "2024-05-27", pageViews: 420, uniqueReaders: 460, engagement: 456 },
  { date: "2024-05-28", pageViews: 233, uniqueReaders: 190, engagement: 456 },
  { date: "2024-05-29", pageViews: 78, uniqueReaders: 130, engagement: 456 },
  { date: "2024-05-30", pageViews: 340, uniqueReaders: 280, engagement: 456 },
  { date: "2024-05-31", pageViews: 178, uniqueReaders: 230, engagement: 456 },
  { date: "2024-06-01", pageViews: 178, uniqueReaders: 200, engagement: 456 },
  { date: "2024-06-02", pageViews: 470, uniqueReaders: 410, engagement: 456 },
  { date: "2024-06-03", pageViews: 103, uniqueReaders: 160, engagement: 456 },
  { date: "2024-06-04", pageViews: 439, uniqueReaders: 380, engagement: 456 },
  { date: "2024-06-05", pageViews: 88, uniqueReaders: 140, engagement: 456 },
  { date: "2024-06-06", pageViews: 294, uniqueReaders: 250, engagement: 456 },
  { date: "2024-06-07", pageViews: 323, uniqueReaders: 370, engagement: 456 },
  { date: "2024-06-08", pageViews: 385, uniqueReaders: 320, engagement: 456 },
  { date: "2024-06-09", pageViews: 438, uniqueReaders: 480, engagement: 456 },
  { date: "2024-06-10", pageViews: 155, uniqueReaders: 200, engagement: 456 },
  { date: "2024-06-11", pageViews: 92, uniqueReaders: 150, engagement: 456 },
  { date: "2024-06-12", pageViews: 492, uniqueReaders: 420, engagement: 456 },
  { date: "2024-06-13", pageViews: 81, uniqueReaders: 130, engagement: 456 },
  { date: "2024-06-14", pageViews: 426, uniqueReaders: 380, engagement: 456 },
  { date: "2024-06-15", pageViews: 307, uniqueReaders: 350, engagement: 456 },
  { date: "2024-06-16", pageViews: 371, uniqueReaders: 310, engagement: 456 },
  { date: "2024-06-17", pageViews: 475, uniqueReaders: 520, engagement: 456 },
  { date: "2024-06-18", pageViews: 107, uniqueReaders: 170, engagement: 456 },
  { date: "2024-06-19", pageViews: 341, uniqueReaders: 290, engagement: 456 },
  { date: "2024-06-20", pageViews: 408, uniqueReaders: 450, engagement: 456 },
  { date: "2024-06-21", pageViews: 169, uniqueReaders: 210, engagement: 456 },
  { date: "2024-06-22", pageViews: 317, uniqueReaders: 270, engagement: 456 },
  { date: "2024-06-23", pageViews: 480, uniqueReaders: 530, engagement: 456 },
  { date: "2024-06-24", pageViews: 132, uniqueReaders: 180, engagement: 456 },
  { date: "2024-06-25", pageViews: 141, uniqueReaders: 190, engagement: 456 },
  { date: "2024-06-26", pageViews: 434, uniqueReaders: 380, engagement: 456 },
  { date: "2024-06-27", pageViews: 448, uniqueReaders: 490, engagement: 456 },
  { date: "2024-06-28", pageViews: 149, uniqueReaders: 200, engagement: 456 },
  { date: "2024-06-29", pageViews: 103, uniqueReaders: 160, engagement: 456 },
  { date: "2024-06-30", pageViews: 446, uniqueReaders: 400, engagement: 456 },
]

const chartConfig = {
  analytics: {
    label: "Analytics",
  },
  pageViews: {
    label: "Page Views",
    color: "var(--chart-1)",
  },
  uniqueReaders: {
    label: "Unique Readers",
    color: "var(--chart-2)",
  },
  engagement: {
    label: "Engagement",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="bg-slate-50 dark:bg-slate-950 pt-0">
      <CardHeader className="flex sm:flex-row items-center gap-2 space-y-0 py-5 border-b">
        <div className="flex-1 gap-1 grid">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden sm:flex sm:ml-auto rounded-lg w-[160px]"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 sm:px-6 pt-4 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="w-full h-[250px] aspect-auto"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillpageViews" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-pageViews)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-pageViews)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="filluniqueReaders" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-uniqueReaders)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-uniqueReaders)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillengagement" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-engagement)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-engagement)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="uniqueReaders"
              type="natural"
              fill="url(#filluniqueReaders)"
              stroke="var(--color-uniqueReaders)"
              stackId="a"
            />
            <Area
              dataKey="pageViews"
              type="natural"
              fill="url(#fillpageViews)"
              stroke="var(--color-pageViews)"
              stackId="a"
            />
            <Area
              dataKey="engagement"
              type="natural"
              fill="url(#engagement)"
              stroke="var(--color-engagement)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
