import Exportbutton from '@/components/Exportbutton'
import React from 'react'
import Teamtable from '../teamtable/page'
import ToolTip from '@/components/ToolTip'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Chisemanuel from '../chisemanuel/page'
const Page = () => {
  return (
    <div className="w-full flex flex-col p-4 sm:p-6 lg:p-8">
      {/* Top bar with title + button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center">
          <span className="text-base sm:text-lg font-sora font-semibold leading-none text-[#1F1F1F] pr-2">
            Average quiz Pass/Fail Rate
          </span>
          <ToolTip text="Average quiz Pass/Fail Rate Information" />
        </div>
        <div className="flex justify-start sm:justify-end">
          <Exportbutton />
        </div>
      </div>

      {/* Table section */}
      <div className="w-full overflow-x-auto px-2 sm:px-4">
        <Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="account">All Members</TabsTrigger>
    <TabsTrigger value="password">Chis Emanuel Andrei</TabsTrigger>
  </TabsList>
  <TabsContent value="account"> <Teamtable /></TabsContent>
  <TabsContent value="password"><Chisemanuel /></TabsContent>
</Tabs>
       
      </div>
    </div>
  )
}

export default Page
