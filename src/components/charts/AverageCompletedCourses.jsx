"use client"

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
import ToolTip from "../ToolTip"

export const description = "A multiple bar chart"

const chartData = [
  { day: "Mon", desktop: 50, mobile: 100 },
  { day: "Tue", desktop: 50, mobile: 100 },
  { day: "Wed", desktop: 90, mobile: 230 },
  { day: "Thu", desktop: 150, mobile: 250 },
  { day: "Fri", desktop: 0, mobile: 250 },
  { day: "Sat", desktop: 280, mobile: 350 },
  { day: "Sun", desktop: 0, mobile: 350 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#083DF5",
  },
  mobile: {
    label: "Mobile",
    color: "#7795FF",
  },
} 

export function AverageCompletedCourses() {
  return (
    <Card className={'bg-[#f7f8fa]'}>
      <CardHeader>
       <CardTitle>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-[#1F1F1F] text-[12px] pr-1">Average completed courses</span>
            <ToolTip text="Average completed courses Information" />
            </div>
            <div>
                 <span className="text-base font-semibold text-[#414141] font-sora text-[12px] pr-2">Daily</span>
                  <span className="text-base font-light text-[12px] font-roboto text-[#414141] pr-2">/ Week</span>
            </div>
          </div>
        </CardTitle>
        
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
         <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#7795FF]"></span>
            <span className="font-normal font-roboto text-[12px] text-[#414141]">% of course content completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#7795FF]"></span>
            <span className="text-xs font-normal font-Roboto text-[#414141]">Progress tracking over time</span>
          </div>
        </div>
      </CardContent>
      
    </Card>
  )
}
