import { MoreHorizontal } from "lucide-react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="shadow-md rounded-2xl odd:bg-Purple even:bg-Yellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2025-26
        </span>
        <MoreHorizontal className="w-5 h-5 text-white" />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-muted-foreground">
        {type}s
      </h2>
    </div>
  );
};

export default UserCard;
