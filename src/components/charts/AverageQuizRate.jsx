"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { PieChart, Pie, Cell, Label } from "recharts"
import ToolTip from "../ToolTip"

const data = [
  { name: "Pass Rate", value: 70 },
  { name: "Fail Rate", value: 30 },
]

const COLORS = ["#003CFF", "#7795FF"]

export function AverageQuizRate() {
  return (
    <Card className={'bg-[#f7f8fa]'}>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center">
            <span className="text-base font-semibold text-[#1F1F1F] pr-2">Average quiz Pass/Fail Rate</span>
            <ToolTip text="Average quiz Pass/Fail Rate Information" />
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center">
        <PieChart width={200} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={40}
            outerRadius={60}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
            <Label
              value=""
              position="center"
              style={{ fill: "#000", fontSize: 14 }}
            />
          </Pie>
        </PieChart>

        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#003CFF]"></span>
            <span className="text-sm">Pass Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#7795FF]"></span>
            <span className="text-sm">Fail Rate</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
