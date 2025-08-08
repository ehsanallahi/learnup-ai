import React from 'react'

const TrackingTimeTeam = () => {
  return (
    <Card className={'bg-[#f7f8fa]'}>
      <CardHeader>
         <CardTitle>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-[#1F1F1F] text-[12px] pr-1">Tracking Time, Frequency & Focus</span>
            <ToolTip text="Tracking Time, Frequency & Focus information" />
            </div>
            <div  className="flex items-center gap-0.5 ">
                 <span className="text-base font-sora font-semibold text-[#414141] text-[12px] ">Daily</span>
                 <span className="text-base font-roboto font-light text-[#414141] text-[12px] ">/ Week</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M1 9L5 5L1 1" stroke="#414141" strokeWidth="0.666667" strokeLinecap="round"/>
</svg>
            </div>
            <div className="flex items-center">
                 <span className="text-base font-semibold text-[#414141] text-[12px] pr-2">Average Time</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M1 9L5 5L1 1" stroke="#414141" strokeWidth="0.666667" strokeLinecap="round"/>
</svg>
            </div>
          </div>
        </CardTitle>
        
      </CardHeader>
      <div className="flex flex-col lg:flex-row pr-4 justify-between gap-4">

      <CardContent className={'pl-0 pr-6'}>
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
                 // domain={[0, 350]}
                ticks={[1, 5, 10, 15, 20, 25, 30, 35]} 
                label={{
                value: 'Number of hours (h)',
                angle: -90,
                position: 'insideLeft',
                offset: 15,
                style: { textAnchor: 'middle', fill: '#999', fontSize: 12 }
              }}/>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
         <div className="flex ml-6 pl-10 gap-4 mt-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#003CFF]"></span>
            <span className="font-normal text-[12px] text-[#414141]">% of course content completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#7795FF]"></span>
            <span className="text-[12px] font-[Roboto] text-[#414141]">Progress tracking over time</span>
          </div>
        </div>
      </CardContent>
      <div className="w-full lg:w-auto">
      <FilterOptions/>
      </div>
      </div>
    </Card>
  )
}

export default TrackingTimeTeam