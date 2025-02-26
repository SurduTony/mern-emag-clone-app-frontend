import { useAuthContext } from "@/contexts/AuthContext";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetMyUser } from "@/api/MyUserApi";
import HoverCardProfile from "./HoverCardProfile";
import HoverCardFavorites from "./HoverCardFavorites";
import HoverCardMyCart from "./HoverCardMyCart";

const NavBar = () => {
  const { isLoggedIn, isLoading } = useAuthContext();
  const { user } = useGetMyUser();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="grid grid-cols-[1fr_5fr_3fr] items-center px-8 py-2">
      <Link to="/">
        <img src="/Logo_eMAG.png" className="max-h-[38px]" />
      </Link>
      <div className="flex justify-between rounded-2xl border-2 border-blue-400 w-full p-1 px-4">
        <input
          type="text"
          placeholder="Start a new search"
          className="flex flex-1"
        />
        <Search className="max-w-[50px] text-blue-600" />
      </div>
      <div className="flex gap-8 justify-end py-2">
        <HoverCardProfile isLoggedIn={isLoggedIn} username={user?.name} />
        <HoverCardFavorites />
        <HoverCardMyCart />
      </div>
    </div>
  );
};

export default NavBar;
