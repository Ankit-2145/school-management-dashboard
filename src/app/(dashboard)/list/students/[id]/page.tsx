import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import Performance from "@/components/Performance";
import { Calendar, Droplet, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          {/* USER INFO CARD */}
          <div className="bg-sky-100 py-6 px-4 rounded-2xl shadow-md flex-1 flex gap-4">
            <div className="w-1/3">
              <div className="relative w-28 h-28">
                <Image
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Student profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Sanchit Sharma</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Droplet className="w-4 h-4" />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>user@gmail</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex flex-wrap gap-4">
            {/* CARD */}
            <div className="w-full md:w-[calc(50%-0.5rem)] bg-white p-4 rounded-2xl flex gap-4 shadow-md">
              <div className="relative w-6 h-6">
                <Image
                  src="/singleAttendance.png"
                  alt="Attendance icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="w-full md:w-[calc(50%-0.5rem)] bg-white p-4 rounded-2xl flex gap-4 shadow-md">
              <div className="relative w-6 h-6">
                <Image
                  src="/singleBranch.png"
                  alt="Branches icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">2nd</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* CARD */}
            <div className="w-full md:w-[calc(50%-0.5rem)] bg-white p-4 rounded-2xl flex gap-4 shadow-md">
              <div className="relative w-6 h-6">
                <Image
                  src="/singleLesson.png"
                  alt="Lessons icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="w-full md:w-[calc(50%-0.5rem)] bg-white p-4 rounded-2xl flex gap-4 shadow-md">
              <div className="relative w-6 h-6">
                <Image
                  src="/singleClass.png"
                  alt="Classes icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="bg-white mt-4 p-4 rounded-2xl shadow-md h-[800px]">
          <h1 className="text-lg font-semibold mb-4">
            Student&apos;s Schedule
          </h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-SkyLight" href="/">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-PurpleLight" href="/">
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-YellowLight" href="/">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-SkyLight" href="/">
              Student&apos;s Assignments
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
