import { useGetMyFavorites, useSetFavorite } from "@/api/MyUserApi";
import { useGetProduct, useGetProducts } from "@/api/ProductApi";
import ProductSlider from "@/components/ProductSlider";
import { useAuthContext } from "@/contexts/AuthContext";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const { product, isLoading } = useGetProduct(id as string);

  const { products, isLoading: isLoadingProducts } = useGetProducts();

  const { isLoggedIn, isLoading: isLoadingAuth } = useAuthContext();
  const { favorites } = useGetMyFavorites();
  const { setFavorite } = useSetFavorite();

  if (isLoading || isLoadingAuth) {
    return <span>Loading...</span>;
  }

  if (!product) {
    return <span>Product not found</span>;
  }

  return (
    <div className="flex flex-col px-4 py-8">
      <span className="text-2xl">{product.name}</span>
      <div className="grid grid-cols-3 gap-4 pt-8">
        <img className="max-h-[400px]" src={product.imageUrl} />

        <div></div>

        <div className="flex flex-col justify-between shadow-lg border-2 border-gray-100 rounded-xl px-4 py-8">
          <span className="text-red-500 font-bold text-2xl">
            ${Math.floor(product.price / 100)}
            <span className="text-sm align-top">
              {product.price % 100 === 0 ? "00" : product.price % 100}
            </span>
          </span>
          <div className="flex flex-col gap-4 text-xl">
            <button className="grid grid-cols-[1fr_6fr] px-4 items-center bg-blue-600 py-2 rounded-md text-white hover:bg-blue-500 hover:cursor-pointer">
              <ShoppingCartIcon />
              Buy
            </button>
            <button
              onClick={() => setFavorite(product._id)}
              className="grid grid-cols-[1fr_6fr] px-4 items-center border-blue-500 text-blue-500 py-2 border-2 rounded-md hover:bg-gray-100 hover:cursor-pointer"
            >
              {isLoggedIn &&
              favorites?.find((fav) => fav._id === product._id) ? (
                <>
                  <HeartIcon fill="red" />
                  Remove from favorites
                </>
              ) : (
                <>
                  <HeartIcon />
                  Add to favorites
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {products && (
        <ProductSlider
          title="Recommended"
          productList={products}
          isLoading={isLoadingProducts}
        />
      )}
    </div>
  );
};

export default ProductPage;
