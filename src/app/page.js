import { AverageCompletedCourses } from "@/components/charts/AverageCompletedCourses"
import { AverageQuizRate } from "@/components/charts/AverageQuizRate"
import { TeammembersStatics } from "@/components/charts/TeammembersStatics"
import { TrackingTime } from "@/components/charts/TrackingTime"
import AdoptionRate from "@/components/AdoptionRate"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="p-4 space-y-6">
      {/* First Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="col-span-1">
          <TeammembersStatics />
        </div>
        <div className="col-span-1">
          <AverageQuizRate />
        </div>
        <div className="col-span-1 bg-[#f7f8fa] rounded-2xl">
          <AdoptionRate />
        </div>
      </div>

      {/* Second Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="col-span-1 xl:col-span-1">
          <AverageCompletedCourses />
        </div>
        <div className="col-span-1 xl:col-span-2">
          <TrackingTime />
        </div>
      </div>
    </div>
  )
}
