"use client";

import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns = [
  {
    accessorKey: "fname",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "coursename",
    header: "Course name",
  },
  {
    accessorKey: "courseduedate",
    header: "Course Due Date",
  },
  {
    accessorKey: "completiondate",
    header: "Completion Date",
   
  },
  {
    accessorKey: "cousestatus",
    header: "Course Status",
  },
  {
    accessorKey: "coursescore",
    header: "Course Score",
  },
  {
    accessorKey: "feedback",
    header: "Feedback Given",
  },
  
];
