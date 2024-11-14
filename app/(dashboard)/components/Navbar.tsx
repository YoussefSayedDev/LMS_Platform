import Search from "./Search";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between p-5">
      <UserAvatar />
      <Search />
    </header>
  );
};

export default Navbar;
