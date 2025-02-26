import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Product, User } from "@/types";
import toast from "react-hot-toast";

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

export const useGetMyFavorites = () => {
  const getMyFavoritesRequest = async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE_URL}/api/favorites`, {
      credentials: "include",
    });

    if (!response) {
      throw new Error("Error in fetching favorites");
    }

    return response.json();
  };

  const { data: favorites, isLoading } = useQuery({
    queryKey: ["getFavorites"],
    queryFn: getMyFavoritesRequest,
  });

  return {
    favorites,
    isLoading,
  };
};

export const useSetFavorite = () => {
  const queryClient = useQueryClient();

  const setFavoriteRequest = async (productId: string) => {
    const response = await fetch(`${API_BASE_URL}/api/favorites/${productId}`, {
      method: "POST",
      credentials: "include",
    });

    if (!response) {
      throw new Error("Error in fetching favorites");
    }

    return response.json();
  };

  const { mutate: setFavorite } = useMutation({
    mutationFn: setFavoriteRequest,
    onSuccess: (data) => {
      toast.success(data.message || "Product updated in favorites");
      queryClient.invalidateQueries({ queryKey: ["getFavorites"] });
    },
    onError: () => {
      toast.error("Couldn't save product to favorites");
    },
  });

  return {
    setFavorite,
  };
};
