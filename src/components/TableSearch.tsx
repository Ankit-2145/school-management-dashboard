import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const TableSearch = () => {
  return (
    <div className="w-full flex items-center gap-2 text-xs rounded-full px-2">
      <div className="relative w-full">
        <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
        <Input
          className="w-full pl-9 rounded-full bg-transparent focus-visible:ring-slate-200"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default TableSearch;
