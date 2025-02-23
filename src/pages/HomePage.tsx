import { Menu, Smartphone } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[50px] flex bg-gradient-to-r from-red-500 to-blue-600 px-4 py-1">
        <div className="flex items-center text-white gap-2 rounded-lg hover:border-2 hover:border-white hover:cursor-pointer px-2 py-1">
          <Menu size={20} />
          <span className="text-sm">Products</span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_5fr] mx-4 shadow-md">
        <div className="flex flex-col px-4 py-4">
          <div className="flex items-center gap-2 hover:cursor-pointer hover:border-b-2 pb-1">
            <Smartphone size={20} />
            <span className="text-sm">Laptop, Tablets & Phones</span>
          </div>
        </div>
        <img src="emag1.jpg" />
      </div>

      <div className="flex flex-col py-8 px-8">
        <h2 className="text-2xl">Deals for you</h2>
      </div>
    </div>
  );
};

export default HomePage;
