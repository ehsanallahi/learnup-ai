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
    accessorKey: "coursesenrolled",
    header: "Courses Enrolled",
  },
  {
    accessorKey: "percentcompleted",
    header: "Completion",
  },
  {
    accessorKey: "currentcourses",
    header: "Current Courses",
    cell: ({ row }) => row.original.currentcourses.join(", "),
  },
  {
    accessorKey: "lastactivedate",
    header: "Last Active Date",
  },
  {
    accessorKey: "totalhoursspent",
    header: "Hours Spent",
  },
  {
    accessorKey: "avgquizscors",
    header: "Avg Quiz Score",
  },
  {
    accessorKey: "pastlp",
    header: "Past LP",
  },
];
