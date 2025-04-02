"use client";

import { useState } from "react";
import { Pencil, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const Icon = type === "create" ? Plus : type === "update" ? Pencil : Trash2;

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          This action cannot be undone. Are you sure you want to delete this{" "}
          {table}?
        </span>
        <Button className="bg-red-700 hover:bg-red-700/90 text-white py-2 px-4 rounded-md border-none w-max self-center cursor-pointer">
          Delete {table}
        </Button>
      </form>
    ) : (
      "create or update form"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full overflow-hidden ${bgColor} p-2`}
        onClick={onClick}
      >
        <Icon className="w-4 h-4 text-black" />
      </button>

      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-2xl relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <button
              className="absolute top-4 right-4 cursor-pointer"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
