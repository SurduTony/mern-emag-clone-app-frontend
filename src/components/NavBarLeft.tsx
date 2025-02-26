import { useGetMyUser } from "@/api/MyUserApi";
import { Edit2, FileSearch2 } from "lucide-react";

const NavBarLeft = () => {
  const { user, isLoading } = useGetMyUser();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!user) {
    return <span>Error in fetching user</span>;
  }

  return (
    <div className="shadow-md">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="bg-blue-600 text-white flex gap-4 justify-between px-4 py-4 items-center">
            <div className="rounded-3xl bg-gray-500 p-4">ST</div>
            <span>{user.name}</span>
            <Edit2 className="text-white bg-gray-600 rounded-xl px-1 hover:bg-gray-500 hover:cursor-pointer" />
          </div>
          <div className="flex gap-4 p-4">
            <div className="flex flex-col gap-2">
              <div className="bg-blue-700 text-white rounded-3xl p-2 flex justify-center hover:bg-blue-600 hover:cursor-pointer">
                <FileSearch2 />
              </div>
              Orders
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLeft;
