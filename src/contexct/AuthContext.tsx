import { ReactNode, createContext, useState } from "react";
import { User } from "../types/costumTypes";

interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthInitContext = {
  user: null,
  setUser: () => console.log("context not initialised"),
};

export const AuthContext = createContext<AuthContextType>(AuthInitContext);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
