import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "u1a9f2d",
      coursename: "AB Testing Method",
      courseduedate: "02.21.2025",
      completiondate: "02.10.2025",
      cousestatus: "Completed",
      coursescore: "9/10",
      feedback: "YES",
      
    },
    {
      id: "m3x8k4z",
      coursename: "Notion - Basic Level Training",
      courseduedate: "02.21.2025",
      completiondate: "-",
      cousestatus: "In progress",
      coursescore: "-",
      feedback: "NO",
      
    },
    {
      id: "s7h5p1b",
      coursename: "AB Testing Method",
      courseduedate: "02.21.2025",
      completiondate: "02.10.2025",
      cousestatus: "Completed",
      coursescore: "9/10",
      feedback: "YES",
    },
    {
      id: "d4q6r9t",
      coursename: "AB Testing Method",
      courseduedate: "02.21.2025",
      completiondate: "02.10.2025",
      cousestatus: "Completed",
      coursescore: "9/10",
      feedback: "YES",
    },
    {
      id: "e8v2m6n",
      coursename: "AB Testing Method",
      courseduedate: "02.21.2025",
      completiondate: "02.10.2025",
      cousestatus: "Completed",
      coursescore: "9/10",
      feedback: "YES",
    },
  ];
}

export default async function Chisemanuel() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
