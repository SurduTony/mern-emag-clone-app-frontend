import { useGetMyUser } from "@/api/MyUserApi";
import NavBarLeft from "@/components/NavBarLeft";

const ProfilePage = () => {
  const { user, isLoading } = useGetMyUser();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!user) {
    return <span>Error in fetching user</span>;
  }

  return (
    <div className="grid grid-cols-[2fr_1fr] gap-8">
      {/* Profile info */}
      <div className="flex flex-col shadow-md gap-4">
        <span className="text-xl p-4">Profile info</span>
        <div className="flex gap-4 px-4 justify-between">
          <div className="rounded-2xl">Image</div>
          <div className="flex flex-col">
            <span className="flex justify-between gap-4">
              <span className="text-gray-600">Name: </span>
              <span>{user.name}</span>
            </span>
            <span className="flex justify-between gap-4">
              <span className="text-gray-600">Email: </span>
              <span>{user.email}</span>
            </span>
            <span className="flex justify-between gap-4">
              <span className="text-gray-600">Phone: </span>
              <span>{user.phoneNumber}</span>
            </span>

            <button className="bg-blue-600 text-white text-sm p-1 mt-2 px-4 rounded-md hover:bg-blue-500 hover:cursor-pointer">
              Update phone number
            </button>
          </div>
          <div className="flex flex-col shadow-md max-w-[150px] p-4 text-center gap-2">
            Thank you for being our customer for
            <span className="font-bold">0 years</span>
          </div>
        </div>
        <div className="flex justify-center border-t-2 py-2 mt-8 text-blue-500 font-bold hover:bg-gray-100 hover:cursor-pointer">
          Update your info
        </div>
      </div>

      <div className="shadow-md p-4">
        <span className="text-xl">Your membership</span>
      </div>
    </div>
  );
};

export default ProfilePage;
