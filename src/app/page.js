

import { AverageCompletedCourses } from "@/components/charts/AverageCompletedCourses"
import { AverageQuizRate } from "@/components/charts/AverageQuizRate"
import { TeammembersStatics } from "@/components/charts/TeammembersStatics"
import { TrackingTime } from "@/components/charts/TrackingTime"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4 ">
  {/* Team members statistics */}
  <TeammembersStatics/>
  <div className=" rounded-2xl shadow  col-span-1">
    {/* Replace with TeamStats component */}
    <AverageQuizRate/>
  </div>

  {/* Quiz Pass/Fail Rate */}
  <div className="bg-white rounded-2xl shadow  col-span-1">
    {/* Replace with QuizStats component */}
  </div>

  

  

  {/* Tracking Time, Frequency & Focus */}
  {/* <div className="bg-white rounded-2xl shadow  col-span-1 md:col-span-2 xl:col-span-2"> */}
    {/* Replace with TrackingChart component */}
    
  {/* </div> */}
</div>
  <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4 py-4">
  


  {/* Average Completed Courses */}
  <div className=" rounded-2xl   col-span-1 md:col-span-2 xl:col-span-1">
    <AverageCompletedCourses/>
    {/* Replace with CompletedCoursesChart component */}
  </div>
    {/* Average Completed Courses */}
  <div className=" rounded-2xl   col-span-1 md:col-span-2 xl:col-span-2">
    <TrackingTime/>
    {/* Replace with CompletedCoursesChart component */}
  </div>

 
</div>
</div>

  )
}