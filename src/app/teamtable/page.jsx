import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "u1a9f2d",
      fname: "Alice Johnson",
      coursesenrolled: 4,
      percentcompleted: "75%",
      currentcourses: ["3"],
      lastactivedate: "2025-08-10",
      totalhoursspent: 42,
      avgquizscors: "88%",
      pastlp: 3,
    },
    {
      id: "m3x8k4z",
      fname: "Michael Smith",
      coursesenrolled: 6,
      percentcompleted: "60%",
      currentcourses: ["3"],
      lastactivedate: "2025-08-09",
      totalhoursspent: 55,
      avgquizscors: "81%",
      pastlp: 4,
    },
    {
      id: "s7h5p1b",
      fname: "Sophia Lee",
      coursesenrolled: 3,
      percentcompleted: "90%",
      currentcourses: ["3"],
      lastactivedate: "2025-08-11",
      totalhoursspent: 38,
      avgquizscors: "92%",
      pastlp: 2,
    },
    {
      id: "d4q6r9t",
      fname: "David Brown",
      coursesenrolled: 5,
      percentcompleted: "45%",
      currentcourses: ["3"],
      lastactivedate: "2025-08-07",
      totalhoursspent: 27,
      avgquizscors: "76%",
      pastlp: 1,
    },
    {
      id: "e8v2m6n",
      fname: "Emma Wilson",
      coursesenrolled: 2,
      percentcompleted: "100%",
      currentcourses: ["3"],
      lastactivedate: "2025-08-05",
      totalhoursspent: 60,
      avgquizscors: "95%",
      pastlp: 5,
    },
  ];
}

export default async function Teamtable() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
