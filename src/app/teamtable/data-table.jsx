"use client";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // 1) Filter data client-side (robust across arrays/objects/JSX)
  const filteredData = useMemo(() => {
    const q = String(globalFilter ?? "").trim().toLowerCase();
    if (!q) return data;

    return data.filter((row) => {
      // check any accessorKey on columns
      return columns.some((col) => {
        const key = col.accessorKey;
        if (!key) return false; // skip non-data columns like actions

        const raw = row[key];

        if (raw == null) return false;

        // arrays -> join
        if (Array.isArray(raw)) {
          return raw.join(" ").toLowerCase().includes(q);
        }

        // objects -> try stringify
        if (typeof raw === "object") {
          try {
            return JSON.stringify(raw).toLowerCase().includes(q);
          } catch {
            return false;
          }
        }

        // primitives
        return String(raw).toLowerCase().includes(q);
      });
    });
  }, [data, columns, globalFilter]);

  // 2) Create table with filtered data (sorting still handled by TanStack)
  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div>
      {/* Search & Sort controls */}
      <div className="flex items-center justify-between py-4">
        {/* Search box with icon on the right */}
        <div className="relative max-w-sm w-full">
          <Input
            placeholder="Search..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pr-10"
            aria-label="Search table"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#7795FF]">
            {/* your search SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="9.16669" cy="9.1665" r="5" stroke="currentColor" />
              <path
                d="M9.16669 6.6665C8.83838 6.6665 8.51329 6.73117 8.20998 6.85681C7.90666 6.98244 7.63107 7.16659 7.39892 7.39874C7.16677 7.63088 6.98262 7.90648 6.85699 8.2098C6.73135 8.51311 6.66669 8.8382 6.66669 9.1665"
                stroke="currentColor"
                strokeLinecap="round"
              />
              <path
                d="M16.6667 16.6665L14.1667 14.1665"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Sort Dropdown - only show columns that have accessorKey (data columns) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Sort
              <svg
                className="ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
              >
                <path
                  d="M1 0.500001L5 4.5L9 0.5"
                  stroke="#414141"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {columns
              .filter((c) => c.accessorKey) // only data columns
              .map((c) => (
                <div key={c.accessorKey}>
                  <DropdownMenuItem
                    onClick={() => {
                      const col = table.getColumn(c.accessorKey);
                      if (col) col.toggleSorting(false); // ascending
                    }}
                  >
                    {typeof c.header === "string" ? c.header : c.accessorKey} (Asc)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      const col = table.getColumn(c.accessorKey);
                      if (col) col.toggleSorting(true); // descending
                    }}
                  >
                    {typeof c.header === "string" ? c.header : c.accessorKey} (Desc)
                  </DropdownMenuItem>
                </div>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  className={index % 2 === 0 ? "bg-[#EEF1FA]" : "bg-[#F7F8FA]"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
