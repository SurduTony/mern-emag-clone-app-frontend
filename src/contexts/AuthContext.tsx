import { useGetMyUser } from "@/api/MyUserApi";
import React, { useContext } from "react";

type AuthContext = {
  isLoading: boolean;
  isLoggedIn: boolean;
};

const AuthContext = React.createContext<AuthContext | undefined>(undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoading, isError } = useGetMyUser();

  return (
    <AuthContext.Provider value={{ isLoading, isLoggedIn: !isError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context as AuthContext;
};
