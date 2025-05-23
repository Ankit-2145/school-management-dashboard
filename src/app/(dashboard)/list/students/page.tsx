import Link from "next/link";
import Image from "next/image";
import Table from "@/components/Table";
import { role, studentsData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { Eye, Plus, Settings2, SortDesc, Trash2 } from "lucide-react";
import FormModal from "@/components/FormModal";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const StudentListPage = () => {
  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt="teacher_image"
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.class}</p>
        </div>
      </td>

      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-Sky">
              <Eye className="w-4 h-4" />
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-Purple">
            //   <Trash2 className="w-4 h-4" />
            // </button>
            <FormModal table="student" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
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
              // <Button
              //   size="icon"
              //   className="rounded-full bg-Yellow hover:bg-Yellow/90 cursor-pointer"
              // >
              //   <Plus className="w-4 h-5 text-black" />
              // </Button>
              <FormModal table="student" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default StudentListPage;
