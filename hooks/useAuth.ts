import { IUser } from "@/types/user";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  }, []);

  const login = ({
    userName,
    password,
  }: {
    userName: string;
    password: string;
  }) => {
    localStorage.setItem("user", JSON.stringify({ userName }));
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  return { user, login, logout, isLoading };
};

export default useAuth;
