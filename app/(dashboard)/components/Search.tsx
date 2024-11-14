import { Separator } from "@/components/ui/separator";
import { Search as SearchIcon } from "lucide-react";
import NotificationIcon from "./NotificationIcon";

const Search = () => {
  return (
    <div className="flex w-2/5 items-center justify-between gap-20 rounded-md bg-card p-5">
      <div className="relative w-full">
        <SearchIcon
          className="absolute left-0 top-1/2 -translate-y-1/2"
          size={24}
        />
        <input
          type="text"
          title="search"
          placeholder="Search..."
          className="w-full bg-transparent py-1 pl-8 outline-none"
        />
        <Separator />
      </div>
      <div className="relative">
        <NotificationIcon />
      </div>
    </div>
  );
};

export default Search;
