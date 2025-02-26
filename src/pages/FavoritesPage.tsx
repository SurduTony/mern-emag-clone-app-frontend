import { useGetMyFavorites, useSetFavorite } from "@/api/MyUserApi";
import { ShoppingCartIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites, isLoading } = useGetMyFavorites();
  const { setFavorite } = useSetFavorite();
  const navigate = useNavigate();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-2xl">Favorites</span>
      {favorites?.map((fav) => (
        <div className="grid grid-cols-[1fr_5fr_1fr] shadow-md py-4 px-4">
          <img
            onClick={() => navigate(`/products/${fav._id}`)}
            src={fav.imageUrl}
            className="max-w-[100px] hover:cursor-pointer"
          />
          <span
            onClick={() => navigate(`/products/${fav._id}`)}
            className="text-sm h-fit hover:cursor-pointer"
          >
            {fav.name}
          </span>
          <div className="flex flex-col justify-between">
            <span className="text-sm">In stock</span>
            <div className="flex justify-between">
              <span className="text-red-600 font-semibold text-md">
                ${Math.floor(fav.price / 100)}
                <span className="text-xs align-top">
                  {fav.price % 100 === 0 ? "00" : fav.price % 100}
                </span>
              </span>
              <div className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 hover:cursor-pointer">
                <ShoppingCartIcon />
              </div>
            </div>
            <button
              onClick={() => setFavorite(fav._id)}
              className="flex gap-1 text-xs text-blue-600 justify-end hover:cursor-pointer"
            >
              <Trash2Icon size={15} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
