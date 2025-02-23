import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RegisterFormData } from "@/pages/RegisterPage";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const registerRequest = async (data: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    return response.json();
  };

  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: registerRequest,
    onSuccess: () => {
      toast.success("Registration successful");
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["getMyUser"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    registerUser,
    isPending,
  };
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const loginRequest = async (data: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to login user");
    }

    return response.json();
  };

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: loginRequest,
    onSuccess: () => {
      toast.success("Login successful");
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["getMyUser"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    loginUser,
    isPending,
  };
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const logoutRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to logout");
    }
  };

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      toast.success("Logout successful");
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["getMyUser"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    logout,
    isPending,
  };
};
