import Search from "./Search";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 p-5 pb-1">
      <div className="mr-auto flex h-[75px] w-full items-center justify-start rounded-md border p-5 backdrop-blur-md backdrop:bg-primary lg:w-2/3">
        <UserAvatar />
      </div>
      <div className="hidden lg:block lg:w-1/3">
        <Search />
      </div>
    </header>
  );
};

export default Navbar;
