"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
              <path d="M6 12.5C9.31375 12.5 12 9.81375 12 6.5C12 3.18629 9.31375 0.5 6 0.5C2.68629 0.5 0 3.18629 0 6.5C0 9.81375 2.68629 12.5 6 12.5Z" fill="#1F1F1F"/>
              <path d="M6.5332 7.89258H5.03906C5.04297 7.54102 5.07031 7.23828 5.12109 6.98438C5.17578 6.72656 5.26758 6.49414 5.39648 6.28711C5.5293 6.08008 5.70508 5.875 5.92383 5.67188C6.10742 5.50781 6.26758 5.35156 6.4043 5.20312C6.54102 5.05469 6.64844 4.90234 6.72656 4.74609C6.80469 4.58594 6.84375 4.4082 6.84375 4.21289C6.84375 3.98633 6.80859 3.79883 6.73828 3.65039C6.67188 3.49805 6.57031 3.38281 6.43359 3.30469C6.30078 3.22656 6.13281 3.1875 5.92969 3.1875C5.76172 3.1875 5.60547 3.22461 5.46094 3.29883C5.31641 3.36914 5.19727 3.47852 5.10352 3.62695C5.01367 3.77539 4.9668 3.9707 4.96289 4.21289H3.26367C3.27539 3.67773 3.39844 3.23633 3.63281 2.88867C3.87109 2.53711 4.18945 2.27734 4.58789 2.10938C4.98633 1.9375 5.43359 1.85156 5.92969 1.85156C6.47656 1.85156 6.94531 1.94141 7.33594 2.12109C7.72656 2.29688 8.02539 2.55664 8.23242 2.90039C8.43945 3.24023 8.54297 3.6543 8.54297 4.14258C8.54297 4.48242 8.47656 4.78516 8.34375 5.05078C8.21094 5.3125 8.03711 5.55664 7.82227 5.7832C7.60742 6.00977 7.37109 6.24414 7.11328 6.48633C6.89062 6.68555 6.73828 6.89453 6.65625 7.11328C6.57812 7.33203 6.53711 7.5918 6.5332 7.89258ZM4.86328 9.70312C4.86328 9.45312 4.94922 9.24609 5.12109 9.08203C5.29297 8.91406 5.52344 8.83008 5.8125 8.83008C6.09766 8.83008 6.32617 8.91406 6.49805 9.08203C6.67383 9.24609 6.76172 9.45312 6.76172 9.70312C6.76172 9.94531 6.67383 10.1504 6.49805 10.3184C6.32617 10.4863 6.09766 10.5703 5.8125 10.5703C5.52344 10.5703 5.29297 10.4863 5.12109 10.3184C4.94922 10.1504 4.86328 9.94531 4.86328 9.70312Z" fill="#F7F8FA"/>
            </svg>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {chartData.map((item, i) => (
          <div key={i}>
            <p className="text-xs text-muted-foreground mb-1">
              % of team members who have {item.label.toLowerCase()} a course
            </p>
            <div className="relative bg-gray-200 h-5 rounded-full">
              <div
                className={`absolute top-0 left-0 h-5 rounded-full text-white text-xs font-semibold flex items-center justify-end pr-2`}
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
