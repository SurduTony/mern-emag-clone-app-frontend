import { useAuthContext } from "@/contexts/AuthContext";
import { ChevronDown, Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useGetMyUser } from "@/api/MyUserApi";
import { useLogout } from "@/api/AuthApi";
import { Separator } from "./ui/separator";

const NavBar = () => {
  const { isLoggedIn, isLoading } = useAuthContext();
  const { user } = useGetMyUser();
  const { logout, isPending } = useLogout();

  if (isLoading || isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="grid grid-cols-[1fr_5fr_3fr] items-center px-10 py-2">
      <Link to="/">
        <img src="/Logo_eMAG.svg" className="max-h-[30px]" />
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
        <HoverCard>
          <HoverCardTrigger>
            <Link to="/my-profile" className="flex gap-2 items-center">
              <User />
              <span>Profile</span>
              <ChevronDown size={15} />
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className=" flex flex-col justify-center items-center gap-4 max-w-[200px]">
            {isLoggedIn ? (
              <>
                <span>{user?.email}</span>
                <Separator />
                <button
                  onClick={() => logout()}
                  className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 max-w-[100px] rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <span className="text-m">You are not logged in</span>
                <Separator />
                <Link
                  to="/login"
                  className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 max-w-[100px] rounded-md"
                >
                  Log in
                </Link>
              </>
            )}
          </HoverCardContent>
        </HoverCard>
        <Link to="/favorites" className="flex gap-2 items-center">
          <Heart />
          <span>Favorites</span>
          <ChevronDown size={15} />
        </Link>
        <Link to="/my-cart" className="flex gap-2 items-center">
          <ShoppingCart />
          <span>My cart</span>
          <ChevronDown size={15} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
