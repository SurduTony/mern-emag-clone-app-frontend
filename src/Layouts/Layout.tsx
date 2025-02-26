import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Menu } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <NavBar />

      <div className="h-[50px] flex bg-gradient-to-r from-red-500 to-blue-600 px-4 py-1">
        <div className="flex items-center text-white gap-2 rounded-lg hover:border-2 hover:border-white hover:cursor-pointer px-2 py-1">
          <Menu size={20} />
          <span className="text-sm">Products</span>
        </div>
      </div>

      <div className="min-h-[600px]">{children}</div>

      <Footer />

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default Layout;
