"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";

const CustomCheckbox = ({ id, label, disabled, defaultChecked }) => {
  const [checked, setChecked] = useState(defaultChecked || false);

  return (
    <div
      className={`flex items-center space-x-2 ${
        disabled ? "text-gray-400" : ""
      }`}
    >
      <div
        onClick={() => !disabled && setChecked(!checked)}
        className={`w-5 h-5 rounded-sm border transition-all
          ${checked ? "bg-[#7795FF] border-[#7795FF]" : "border-gray-300"} 
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
};

export default function FilterOptions() {
  return (
    <div className="space-y-4 mt-4 ml-10">
      <CustomCheckbox
        id="learner"
        label="Show per learner"
        defaultChecked={true}
      />
      <CustomCheckbox
        id="team"
        label="Show per total team"
        disabled={true}
      />
      <CustomCheckbox
        id="both"
        label="Show both"
        disabled={true}
      />
    </div>
  );
}
