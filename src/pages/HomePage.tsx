import { useGetProducts } from "@/api/ProductApi";
import ProductSlider from "@/components/ProductSlider";
import { Smartphone } from "lucide-react";

const HomePage = () => {
  const { products, isLoading } = useGetProducts();

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[1fr_5fr] mx-4 shadow-md">
        <div className="flex flex-col px-4 py-4">
          <div className="flex items-center gap-2 hover:cursor-pointer hover:border-b-2 pb-1">
            <Smartphone size={20} />
            <span className="text-sm">Laptop, Tablets & Phones</span>
          </div>
        </div>
        <img src="emag1.jpg" />
      </div>

      {products && (
        <>
          <ProductSlider
            title={"Deals for you"}
            productList={products}
            isLoading={isLoading}
          />
          <ProductSlider
            title={"Buy again"}
            productList={products}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
