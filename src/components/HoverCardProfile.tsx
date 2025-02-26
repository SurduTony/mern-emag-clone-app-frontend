import { useLogout } from "@/api/AuthApi";
import { Separator } from "./ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown, User } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  isLoggedIn: boolean;
  username?: string;
};

const HoverCardProfile = ({ isLoggedIn, username }: Props) => {
  const { logout, isPending } = useLogout();

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <HoverCard openDelay={1} closeDelay={1}>
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
            <span>{username}</span>
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
  );
};

export default HoverCardProfile;
