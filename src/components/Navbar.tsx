import {
  CircleUserRound,
  Megaphone,
  MessageSquare,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full px-2">
        <div className="relative">
          <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
          <Input
            className="w-full md:w-[300px] pl-9 rounded-full bg-transparent focus-visible:ring-slate-200"
            placeholder="Search..."
          />
        </div>
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center ml-auto md:ml-0 gap-4 md:gap-6">
        <Button
          size="icon"
          variant="ghost"
          className="bg-white rounded-full h-9 w-9 p-0 cursor-pointer"
        >
          <MessageSquare className="h-5 w-5 text-muted-foreground" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="bg-white rounded-full h-9 w-9 p-0 relative cursor-pointer"
        >
          <Megaphone className="h-5 w-5 text-muted-foreground" />
          <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </Button>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-muted-foreground text-right">
            Admin
          </span>
        </div>
        <CircleUserRound className="w-9 h-9 text-muted-foreground" />
      </div>
    </div>
  );
};

export default Navbar;
