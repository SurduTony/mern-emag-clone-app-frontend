import { Product } from "@/types";
import ProductCard from "./ProductCard";
import SkeletonProductSlider from "./SkeletonProductSlider";
import { useGetMyFavorites } from "@/api/MyUserApi";
import { useAuthContext } from "@/contexts/AuthContext";

type Props = {
  title: string;
  productList: Product[];
  isLoading: boolean;
};

const ProductSlider = ({ title, productList, isLoading }: Props) => {
  const { isLoggedIn } = useAuthContext();
  const { favorites } = useGetMyFavorites();

  if (isLoading || !productList) {
    return <SkeletonProductSlider />;
  }

  return (
    <div className="flex flex-col py-8 px-8">
      <h2 className="text-2xl pb-4 pl-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {productList.map((product) => (
          <ProductCard
            product={product}
            isFavorite={
              isLoggedIn && favorites
                ? favorites?.find((fav) => fav._id === product._id) !==
                  undefined
                : false
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
