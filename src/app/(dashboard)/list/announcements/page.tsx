import Link from "next/link";
import Table from "@/components/Table";
import { announcementsData, role } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { Pencil, Plus, Settings2, SortDesc, Trash2 } from "lucide-react";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const AnnouncementListPage = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-Sky">
              <Pencil className="w-4 h-4" />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-Purple">
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Announcements
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <Button
              size="icon"
              className="rounded-full bg-Yellow hover:bg-Yellow/90 cursor-pointer"
            >
              <Settings2 className="w-4 h-5 text-black" />
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-Yellow hover:bg-Yellow/90 cursor-pointer"
            >
              <SortDesc className="w-4 h-5 text-black" />
            </Button>
            {role === "admin" && (
              <Button
                size="icon"
                className="rounded-full bg-Yellow hover:bg-Yellow/90 cursor-pointer"
              >
                <Plus className="w-4 h-5 text-black" />
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AnnouncementListPage;
