"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import ToolTip from "./ToolTip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Toggle } from "@/components/ui/toggle"

export default function AdoptionRateCard() {
  return (
    <div className="">
    <div className="flex justify-end  ">
    
    <DropdownMenu>
  <DropdownMenuTrigger>
    <div className="flex justify-between">
    <span className="text-[12px] font-inter border-black">Export options</span>
    <svg className="p-0.5" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="#1F1F1F" strokeLinecap="round"/>
    </svg>
    </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel className={'text-xs font-inter'}>Select format:</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <div className="flex justify-between">
    <DropdownMenuItem>
      <Toggle>CSV</Toggle>
    </DropdownMenuItem>
    <DropdownMenuItem>
       <Toggle>PDF</Toggle>
    </DropdownMenuItem>
   </div>
   <DropdownMenuItem className={'justify-center'}>
       <Button variant={'outline'} className={'bg-[#083DF5] '}>
        <span className="text-white">Export</span>
        </Button>
    </DropdownMenuItem>
   
  </DropdownMenuContent>
</DropdownMenu>
     <Button   size="sm" className="font-normal  font-[Inter] bg-[#083DF5]">  
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M9.33329 10L6.66663 12.6667L9.33329 15.3333" stroke="#F7F8FA" strokeWidth="1.5"/>
<path d="M12.0414 5.66683C12.451 6.37625 12.6666 7.18099 12.6666 8.00016C12.6666 8.81933 12.451 9.62407 12.0414 10.3335C11.6318 11.0429 11.0427 11.632 10.3333 12.0416C9.62387 12.4512 8.81913 12.6668 7.99996 12.6668" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M6.66671 6L9.33337 3.33333L6.66671 0.666667" stroke="#F7F8FA" strokeWidth="1.5"/>
<path d="M3.95859 10.3332C3.549 9.62375 3.33337 8.81901 3.33337 7.99984C3.33337 7.18067 3.549 6.37593 3.95859 5.6665C4.36817 4.95708 4.95728 4.36797 5.66671 3.95839C6.37613 3.5488 7.18087 3.33317 8.00004 3.33317" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
      <span className="text-[12px]">Refresh page</span>
      
    </Button>
    </div>
    <div className="flex justify-end text-[10px] pt-1 pb-2">
  <div className="flex flex-col items-end leading-tight">
    <p>Last update at 3:00PM</p>
    <p>06.06.2025</p>
  </div>
</div>

    <Card className="bg-[#F7F8FA] border shadow-none">
      <CardContent className="">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <span className=" text-[#1F1F1F] font-bold font-sora text-[18px] leading-tight">
            Adoption Rate:
          </span>
          <div className="flex items-center">
          <span className="pr-2 text-[#1F1F1F] font-bold text-[18px] font-sora ">
             Active vs Invited learners
          </span>
          <ToolTip text="Adoption Rate vs Active vs Invited learners" />
            </div>
        </div>

        {/* Adoption Rate */}
        <p className="text-[12px] font-[inter] text-[#414141] mt-4">
          Adoption Rate: <span className="font-bold text-[18px] font-roboto text-black">60%</span>
        </p>

        {/* Custom Progress Bar */}
        <div className="relative w-full h-6 mt-2 flex rounded-full overflow-hidden">
          <div className="w-[40%] bg-[#E4E4E4] flex items-center justify-center text-xs text-black font-medium">
            120
          </div>
          <div className="w-[60%] bg-[#7795FF] flex items-center justify-center text-xs text-white font-medium">
            200
          </div>
        </div>

        {/* Legends */}
        <div className="flex items-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#7795FF]" />
            <Label className="text-xs text-gray-700">Active learners</Label>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E4E4E4]" />
            <Label className="text-xs text-gray-700">Invited learners</Label>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
