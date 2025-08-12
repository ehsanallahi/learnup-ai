"use client";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns = [
  {
    accessorKey: "fname",
    header: "Full name",
    // header: ({ column }) => (
    //   <Button
    //     variant="ghost"
    //     onClick={() =>
    //       column.toggleSorting(column.getIsSorted() === "asc")
    //     }
    //   >
    //     Full name
    //     <ArrowUpDown className="ml-2 h-4 w-4" />
    //   </Button>
    // ),
    cell: ({ row }) => {
      const name = row.getValue("fname");
      return (
        <div className="flex items-center gap-2">
          <span>{name}</span>
        </div>
      );
    },
  },
  //  {
  //   accessorKey: "fname",
  //   header: "Full name",
  // },
  {
    accessorKey: "coursesenrolled",
    header: "Courses enrolled",
  },
  {
    accessorKey: "percentcompleted",
    header: "% Completed",
  },
  {
    accessorKey: "currentcourses",
    header: "Current courses",
  },
  {
    accessorKey: "lastactivedate",
    header: "Last active date",
  },
  {
    accessorKey: "totalhoursspent",
    header: "Total hours spent",
  },
  {
    accessorKey: "avgquizscors",
    header: "Average quiz scores",
  },
  {
    accessorKey: "pastlp",
    header: "Past LP’s",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<rect width="24" height="24" rx="4" fill="#F7F8FA"/>
<path d="M12 6L12 18" stroke="#083DF5" strokeLinecap="round"/>
<path d="M18 12L6 12" stroke="#083DF5" strokeLinecap="round"/>
</svg>
              {/* <MoreHorizontal className="h-4 w-4" /> */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(user.fname)
              }
            >
              Copy Name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Send message</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
