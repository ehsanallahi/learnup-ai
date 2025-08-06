"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ToolTip from "../ToolTip"

const chartData = [
  { label: "Started", value: 82 },
  { label: "Completed", value: 100 },
]

export function TeammembersStatics() {
  return (
    <Card className={'bg-[#f7f8fa]'}>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center">
            <span className="text-base font-semibold text-[#1F1F1F] pr-2">Team members statics</span>
            <ToolTip text="Team members statics Information" />
            
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 pt-5">
        {chartData.map((item, i) => (
          <div key={i}>
            <p className="text-xs text-muted-foreground mb-1">
              % of team members who have {item.label.toLowerCase()} a course
            </p>
            <div className="relative bg-gray-200 h-10 rounded-full">
              <div
                className={`absolute top-0 left-0 h-10 rounded-full text-white text-xs font-semibold flex items-center justify-end pr-2`}
                style={{
                  width: `${item.value}%`,
                  backgroundColor: item.label === "Started" ? "#7795FF" : "#003CFF",
                }}
              >
                {item.value}%
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
