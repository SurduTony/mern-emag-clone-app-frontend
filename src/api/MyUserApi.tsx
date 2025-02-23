import { useQuery } from "@tanstack/react-query";
import { User } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () => {
  const getMyUserRequest = async (): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/api/me`, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error in getting my user");
    }

    return response.json();
  };

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["getMyUser"], queryFn: getMyUserRequest });

  return {
    user,
    isLoading,
    isError,
  };
};
