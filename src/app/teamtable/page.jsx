import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "u1a9f2d",
      fname: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 61 61"
            fill="none"
            className="rounded-full object-cover"
          >
            <circle cx="30.5" cy="30.5" r="23.5" fill="#7795FF" />
            <path
              d="M36.8467 23.3594V39H34.7627L26.8887 26.9365V39H24.8154V23.3594H26.8887L34.7949 35.4551V23.3594H36.8467Z"
              fill="#F7F8FA"
            />
          </svg>
          Alice Johnson
        </div>
      ),
      coursesenrolled: "4 courses",
      percentcompleted: "75%",
      currentcourses: ["3"],
      lastactivedate: "2025-08-10",
      totalhoursspent: 42,
      avgquizscors: "88%",
      pastlp: 3,
    },
    {
      id: "m3x8k4z",
      fname: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 61 61"
            fill="none"
            className="rounded-full object-cover"
          >
            <circle cx="30.5" cy="30.5" r="23.5" fill="#7795FF" />
            <path
              d="M36.8467 23.3594V39H34.7627L26.8887 26.9365V39H24.8154V23.3594H26.8887L34.7949 35.4551V23.3594H36.8467Z"
              fill="#F7F8FA"
            />
          </svg>
          Michael Smith
        </div>
      ),
      coursesenrolled: "6 courses",
      percentcompleted: "60%",
      currentcourses: ["3"],
      lastactivedate: "2025-08-09",
      totalhoursspent: 55,
      avgquizscors: "81%",
      pastlp: 4,
    },
    {
      id: "s7h5p1b",
      fname: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 61 61"
            fill="none"
            className="rounded-full object-cover"
          >
            <circle cx="30.5" cy="30.5" r="23.5" fill="#7795FF" />
            <path
              d="M36.8467 23.3594V39H34.7627L26.8887 26.9365V39H24.8154V23.3594H26.8887L34.7949 35.4551V23.3594H36.8467Z"
              fill="#F7F8FA"
            />
          </svg>
          Sophia Lee
        </div>
      ),
      coursesenrolled: "3 courses",
      percentcompleted: "90%",
      currentcourses: ["3"],
      lastactivedate: "2025-08-11",
      totalhoursspent: 38,
      avgquizscors: "92%",
      pastlp: 2,
    },
    {
      id: "d4q6r9t",
      fname: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 61 61"
            fill="none"
            className="rounded-full object-cover"
          >
            <circle cx="30.5" cy="30.5" r="23.5" fill="#7795FF" />
            <path
              d="M36.8467 23.3594V39H34.7627L26.8887 26.9365V39H24.8154V23.3594H26.8887L34.7949 35.4551V23.3594H36.8467Z"
              fill="#F7F8FA"
            />
          </svg>
          David Brown
        </div>
      ),
      coursesenrolled: "5 courses",
      percentcompleted: "45%",
      currentcourses: ["3"],
      lastactivedate: "2025-08-07",
      totalhoursspent: 27,
      avgquizscors: "76%",
      pastlp: 1,
    },
    {
      id: "e8v2m6n",
      fname: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 61 61"
            fill="none"
            className="rounded-full object-cover"
          >
            <circle cx="30.5" cy="30.5" r="23.5" fill="#7795FF" />
            <path
              d="M36.8467 23.3594V39H34.7627L26.8887 26.9365V39H24.8154V23.3594H26.8887L34.7949 35.4551V23.3594H36.8467Z"
              fill="#F7F8FA"
            />
          </svg>
          Emma Wilson
        </div>
      ),
      coursesenrolled: "2 courses",
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
