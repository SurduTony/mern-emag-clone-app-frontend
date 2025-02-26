import { ChevronDown, Heart } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Link, useNavigate } from "react-router-dom";
import { useGetMyFavorites, useSetFavorite } from "@/api/MyUserApi";
import { Separator } from "./ui/separator";
import { useAuthContext } from "@/contexts/AuthContext";

const HoverCardFavorites = () => {
  const navigate = useNavigate();
  const { isLoggedIn, isLoading: isLoadingLogin } = useAuthContext();
  const { favorites, isLoading: isLoadingFavorites } = useGetMyFavorites();
  const { setFavorite } = useSetFavorite();

  if (isLoadingFavorites || isLoadingLogin) {
    return <span>Loading...</span>;
  }

  const sliceName = (name: string, length: number) => {
    if (name.length > length) return name.slice(0, length) + "...";
    return name;
  };

  return (
    <HoverCard openDelay={1} closeDelay={1}>
      <HoverCardTrigger>
        <Link to="/favorites" className="flex gap-2 items-center">
          <div className="relative">
            <span className="absolute bg-red-600 text-white rounded-xl px-1 text-xs -top-1 left-3">
              {favorites?.length}
            </span>
            <Heart />
          </div>
          <span>Favorites</span>
          <ChevronDown size={15} />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="px-0 pt-1 pb-1">
        <h2 className="text-blue-500 pt-0 pb-2 text-center">Last added</h2>
        <Separator />
        {isLoggedIn &&
          favorites?.slice(0, 3).map((fav) => (
            <div
              onClick={() => navigate(`/products/${fav._id}`)}
              className="flex gap-4 p-2 max-h-[150px] hover:bg-gray-100 hover:cursor-pointer"
            >
              <img src={fav.imageUrl} className="max-h-[50px]" />
              <span className="text-xs">{sliceName(fav.name, 40)}</span>
              <div className="flex flex-col justify-between items-end">
                <span className="text-blue-600 font-bold text-md">
                  ${Math.floor(fav.price / 100)}
                  <span className="text-xs align-top">
                    {fav.price % 100 === 0 ? "00" : fav.price % 100}
                  </span>
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents triggering the parent onClick
                    setFavorite(fav._id);
                  }}
                  className="bg-white text-blue-600 rounded-md w-fit px-3 hover:bg-gray-100"
                >
                  x
                </button>
              </div>
            </div>
          ))}
        <button className="text-white text-sm bg-blue-600 px-1 py-1 mx-1 rounded-sm hover:bg-blue-500 w-[97%]">
          See all your favorite products
        </button>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardFavorites;
