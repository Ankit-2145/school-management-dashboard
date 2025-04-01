"use client";

import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Mathematics Class",
    time: "9:00 AM - 10:30 AM",
    description: "Algebra and Trigonometry session for Grade 10 students.",
  },
  {
    id: 2,
    title: "Science Lab Session",
    time: "11:00 AM - 12:30 PM",
    description: "Physics experiment on Newton's Laws of Motion.",
  },
  {
    id: 3,
    title: "Teacher's Meeting",
    time: "1:00 PM - 2:00 PM",
    description: "Discussion on academic performance and curriculum planning.",
  },
  {
    id: 4,
    title: "Sports Practice",
    time: "3:00 PM - 4:30 PM",
    description: "Football practice session for the school team.",
  },
  {
    id: 5,
    title: "Parent-Teacher Meeting",
    time: "5:00 PM - 6:00 PM",
    description:
      "Meeting with parents to discuss students' progress and improvements.",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <MoreHorizontal className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-Sky even:border-t-Purple"
            key={event.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-xs text-gray-400">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
