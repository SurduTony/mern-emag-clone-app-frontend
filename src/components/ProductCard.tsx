import { useSetFavorite } from "@/api/MyUserApi";
import { Product } from "@/types";
import { Heart, ShoppingCartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
  isFavorite: boolean;
};

const ProductCard = ({ product, isFavorite }: Props) => {
  const navigate = useNavigate();
  const { setFavorite } = useSetFavorite();

  const sliceName = (name: string) => {
    if (name.length > 30) return name.slice(0, 30) + "...";
    return name;
  };

  return (
    <div className="flex flex-col justify-between pt-4 shadow-md max-w-[220px] gap-4 rounded-md">
      <div>
        <img
          className="hover:cursor-pointer"
          onClick={() => navigate(`/products/${product._id}`)}
          src={product.imageUrl}
        />
        <div className="flex justify-between px-4 mt-4">
          <span className="text-left font-semibold text-gray-600">
            {sliceName(product.name)}
          </span>
          <button onClick={() => setFavorite(product._id)}>
            {isFavorite ? (
              <Heart
                className="hover:cursor-pointer mr-1 min-w-[25px]"
                fill="red"
              />
            ) : (
              <Heart className="hover:cursor-pointer mr-1 min-w-[25px]" />
            )}
          </button>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-red-500 font-bold text-xl">
            ${Math.floor(product.price / 100)}
            <span className="text-sm align-top">
              {product.price % 100 === 0 ? "00" : product.price % 100}
            </span>
          </span>
          <div className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-400 hover:cursor-pointer">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
