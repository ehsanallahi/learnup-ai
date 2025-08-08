"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ToolTip from "../ToolTip";

// Chart data
const chartData = [
  { month: "Mon", desktop: 5, mobile: 15 },
  { month: "Tue", desktop: 5, mobile: 20 },
  { month: "Wed", desktop: 8, mobile: 20 },
  { month: "Thu", desktop: 10, mobile: 24 },
  { month: "Fri", desktop: 5, mobile: 30 },
  { month: "Sat" },
  { month: "Sun" },
];


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#003CFF",
  },
  mobile: {
    label: "Mobile",
    color: "#7795FF",
  },
};

// Reusable radio-like checkbox component
const CustomCheckbox = ({ id, label, selected, onSelect, disabled }) => (
  <div
    className={`flex items-center space-x-2 ${
      disabled ? "text-gray-400" : ""
    }`}
  >
    <div
      onClick={() => !disabled && onSelect(id)}
      className={`w-5 h-5 rounded-sm border transition-all
        ${selected ? "bg-[#7795FF] border-[#7795FF]" : "border-gray-300"} 
        ${disabled ? "cursor-not-allowed bg-gray-200" : "cursor-pointer"}`}
    />
    <Label
      htmlFor={id}
      className={`text-sm font-medium ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {label}
    </Label>
  </div>
);

// Main Component
export function TrackingTime() {
  const [selectedFilter, setSelectedFilter] = useState("team"); // default selected

  return (
    <Card className={"bg-[#f7f8fa]"}>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-[#1F1F1F] text-[12px] pr-1">
                Tracking Time, Frequency & Focus
              </span>
              <ToolTip text="Tracking Time, Frequency & Focus information" />
            </div>
            <div className="flex items-center gap-0.5 ">
              <span className="text-base font-sora font-semibold text-[#414141] text-[12px] ">
                Daily
              </span>
              <span className="text-base font-roboto font-light text-[#414141] text-[12px] ">
                / Week
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="#414141"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <span className="text-base font-semibold text-[#414141] text-[12px] pr-2">
                Average Time
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="#414141"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </CardTitle>
      </CardHeader>

      <div className="flex flex-col lg:flex-row pr-4 justify-between gap-4">
        {/* Chart Content */}
        <CardContent className={"pl-0 pr-6"}>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={7}
                ticks={[1, 5, 10, 15, 20, 25, 30, 35]}
                label={{
                  value: "Number of hours (h)",
                  angle: -90,
                  position: "insideLeft",
                  offset: 15,
                  style: {
                    textAnchor: "middle",
                    fill: "#999",
                    fontSize: 12,
                  },
                }}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              {(selectedFilter === "learner" || selectedFilter === "both") && (
                <Line
                  dataKey="desktop"
                  type="natural"
                  stroke="#7795FF"
                  strokeWidth={2}
                  dot={{ fill: "#7795FF" }}
                  activeDot={{ r: 6 }}
                />
              )}
              {(selectedFilter === "team" || selectedFilter === "both") && (
                <Line
                  dataKey="mobile"
                  type="natural"
                  stroke="#083DF5"
                  strokeWidth={2}
                  dot={{ fill: "#083DF5" }}
                  activeDot={{ r: 6 }}
                />
              )}
            </LineChart>
          </ChartContainer>

          {/* Dynamic Legend */}
          <div className="flex ml-6 pl-10 gap-4 mt-4">
            {selectedFilter === "learner" && (
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#7795FF]"></span>
                <span className="font-normal text-[12px] text-[#414141]">
                  Average time per learner
                </span>
              </div>
            )}
            {selectedFilter === "team" && (
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#083DF5]"></span>
                <span className="font-normal text-[12px] text-[#414141]">
                  Average time spent /total team
                </span>
              </div>
            )}
            {selectedFilter === "both" && (
              <>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#7795FF]"></span>
                  <span className="font-normal text-[12px] text-[#414141]">
                    Average time learner
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#083DF5]"></span>
                  <span className="font-normal text-[12px] text-[#414141]">
                    Average time total team
                  </span>
                </div>
              </>
            )}
          </div>
        </CardContent>

        {/* Filter Options - Radio Style */}
        <div className="w-full lg:w-auto space-y-4 mt-4 ml-10">
          <CustomCheckbox
            id="learner"
            label="Show per learner"
            selected={selectedFilter === "learner"}
            onSelect={setSelectedFilter}
          />
          <CustomCheckbox
            id="team"
            label="Show per total team"
            selected={selectedFilter === "team"}
            onSelect={setSelectedFilter}
          />
          <CustomCheckbox
            id="both"
            label="Show both"
            selected={selectedFilter === "both"}
            onSelect={setSelectedFilter}
          />
        </div>
      </div>
    </Card>
  );
}
