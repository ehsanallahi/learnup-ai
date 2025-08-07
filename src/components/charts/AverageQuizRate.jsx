"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { PieChart, Pie, Cell } from "recharts"
import ToolTip from "../ToolTip"

const data = [
  { name: "Pass Rate", value: 70 },
  { name: "Fail Rate", value: 30 },
]

const COLORS = ["#003CFF", "#7795FF"]

//  Custom straight labels (not curved)
const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, index }) => {
  const RADIAN = Math.PI / 180
  const radius = outerRadius + 10
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  // Slight rotation logic (you can adjust angle factor)
  const angle = -midAngle + (midAngle > 90 ? 85 : 86)

  return (
    <text
      x={x}
      y={y}
      fill="#1F1F1F"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={16}
      fontWeight={600}
      fontFamily="Sora"
      transform={`rotate(${angle}, ${x}, ${y})`}
    >
      {`${data[index].value}%`}
    </text>
  )
}


export function AverageQuizRate() {
  return (
    <Card className="bg-[#f7f8fa]">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center">
            <span className="text-base font-sora font-semibold leading-none text-[#1F1F1F] pr-2">
              Average quiz Pass/Fail Rate
            </span>
            <ToolTip text="Average quiz Pass/Fail Rate Information" />
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center py-4">
        <PieChart width={220} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={40}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            labelLine={false}
            label={renderCustomLabel} // ✅ new label function
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#003CFF]"></span>
            <span className="text-sm font-sora font-semibold text-[#1F1F1F]">Pass Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#7795FF]"></span>
            <span className="text-sm font-sora font-semibold text-[#1F1F1F]">Fail Rate</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
