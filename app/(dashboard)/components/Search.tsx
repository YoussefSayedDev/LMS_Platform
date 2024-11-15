import { Separator } from "@/components/ui/separator";
import { Search as SearchIcon } from "lucide-react";
import NotificationIcon from "./NotificationIcon";

const Search = () => {
  return (
    <div className="flex h-[75px] w-full items-center justify-between gap-20 rounded-md border p-5 shadow-sm backdrop-blur-md backdrop:bg-primary">
      <div className="relative w-full">
        <SearchIcon
          className="absolute left-0 top-[14px] -translate-y-1/2"
          size={24}
        />
        <input
          type="text"
          title="search"
          placeholder="Search..."
          className="w-full bg-transparent py-1 pl-8 outline-none"
        />
        <Separator className="mt-1" />
      </div>
      <div className="relative">
        <NotificationIcon />
      </div>
    </div>
  );
};

export default Search;
