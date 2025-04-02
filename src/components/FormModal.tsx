"use client";

import { Plus, Pencil, Trash2 } from "lucide-react";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-Yellow"
      : type === "update"
      ? "bg-Sky"
      : "bg-Purple";

  const Icon = type === "create" ? Plus : type === "update" ? Pencil : Trash2;

  return (
    <button
      className={`${size} flex items-center justify-center rounded-full ${bgColor} p-2`}
    >
      <Icon className="w-4 h-4 text-black" />
    </button>
  );
};

export default FormModal;
