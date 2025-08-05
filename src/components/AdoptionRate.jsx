"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

export default function AdoptionRateCard() {
  return (
    <div className="">
    <div className="flex justify-end gap-2 ">
    <Button variant="outline" size="sm"    >  
      <span className="text-[12px]">Export options</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
      >
        <path
          d="M1 1L5 5L9 1"
          stroke="#1F1F1F"
          strokeLinecap="round"
        />
      </svg>
    </Button>
     <Button   size="sm" className="font-normal  font-[Inter] bg-[#083DF5]">  
      <span className="text-[12px]">New Branch</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M9.33329 10L6.66663 12.6667L9.33329 15.3333" stroke="#F7F8FA" strokeWidth="1.5"/>
<path d="M12.0414 5.66683C12.451 6.37625 12.6666 7.18099 12.6666 8.00016C12.6666 8.81933 12.451 9.62407 12.0414 10.3335C11.6318 11.0429 11.0427 11.632 10.3333 12.0416C9.62387 12.4512 8.81913 12.6668 7.99996 12.6668" stroke="#F7F8FA" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6.66671 6L9.33337 3.33333L6.66671 0.666667" stroke="#F7F8FA" strokeWidth="1.5"/>
<path d="M3.95859 10.3332C3.549 9.62375 3.33337 8.81901 3.33337 7.99984C3.33337 7.18067 3.549 6.37593 3.95859 5.6665C4.36817 4.95708 4.95728 4.36797 5.66671 3.95839C6.37613 3.5488 7.18087 3.33317 8.00004 3.33317" stroke="#F7F8FA" stroke-width="1.5" stroke-linecap="round"/>
</svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
              <path d="M6 12.5C9.31375 12.5 12 9.81375 12 6.5C12 3.18629 9.31375 0.5 6 0.5C2.68629 0.5 0 3.18629 0 6.5C0 9.81375 2.68629 12.5 6 12.5Z" fill="#1F1F1F"/>
              <path d="M6.5332 7.89258H5.03906C5.04297 7.54102 5.07031 7.23828 5.12109 6.98438C5.17578 6.72656 5.26758 6.49414 5.39648 6.28711C5.5293 6.08008 5.70508 5.875 5.92383 5.67188C6.10742 5.50781 6.26758 5.35156 6.4043 5.20312C6.54102 5.05469 6.64844 4.90234 6.72656 4.74609C6.80469 4.58594 6.84375 4.4082 6.84375 4.21289C6.84375 3.98633 6.80859 3.79883 6.73828 3.65039C6.67188 3.49805 6.57031 3.38281 6.43359 3.30469C6.30078 3.22656 6.13281 3.1875 5.92969 3.1875C5.76172 3.1875 5.60547 3.22461 5.46094 3.29883C5.31641 3.36914 5.19727 3.47852 5.10352 3.62695C5.01367 3.77539 4.9668 3.9707 4.96289 4.21289H3.26367C3.27539 3.67773 3.39844 3.23633 3.63281 2.88867C3.87109 2.53711 4.18945 2.27734 4.58789 2.10938C4.98633 1.9375 5.43359 1.85156 5.92969 1.85156C6.47656 1.85156 6.94531 1.94141 7.33594 2.12109C7.72656 2.29688 8.02539 2.55664 8.23242 2.90039C8.43945 3.24023 8.54297 3.6543 8.54297 4.14258C8.54297 4.48242 8.47656 4.78516 8.34375 5.05078C8.21094 5.3125 8.03711 5.55664 7.82227 5.7832C7.60742 6.00977 7.37109 6.24414 7.11328 6.48633C6.89062 6.68555 6.73828 6.89453 6.65625 7.11328C6.57812 7.33203 6.53711 7.5918 6.5332 7.89258ZM4.86328 9.70312C4.86328 9.45312 4.94922 9.24609 5.12109 9.08203C5.29297 8.91406 5.52344 8.83008 5.8125 8.83008C6.09766 8.83008 6.32617 8.91406 6.49805 9.08203C6.67383 9.24609 6.76172 9.45312 6.76172 9.70312C6.76172 9.94531 6.67383 10.1504 6.49805 10.3184C6.32617 10.4863 6.09766 10.5703 5.8125 10.5703C5.52344 10.5703 5.29297 10.4863 5.12109 10.3184C4.94922 10.1504 4.86328 9.94531 4.86328 9.70312Z" fill="#F7F8FA"/>
            </svg>
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
