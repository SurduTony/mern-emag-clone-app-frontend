import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetProducts = () => {
  const getProductsRequest = async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE_URL}/api/products`);

    if (!response.ok) {
      throw new Error("Error in fetching products");
    }

    return response.json();
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProductsRequest,
  });

  return {
    products,
    isLoading,
  };
};

export const useGetProduct = (id: string) => {
  const getProductRequest = async (): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/api/products/${id}`);

    if (!response) {
      throw new Error("Error in fetching product");
    }

    return response.json();
  };

  const { data: product, isLoading } = useQuery({
    queryKey: ["getProduct", id],
    queryFn: getProductRequest,
  });

  return {
    product,
    isLoading,
  };
};
