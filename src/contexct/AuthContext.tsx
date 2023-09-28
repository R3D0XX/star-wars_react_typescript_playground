import { ReactNode, createContext, useEffect, useState } from "react";
// import { User } from "../types/costumTypes";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthInitContext = {
  user: null,
  setUser: () => console.log("context not initialised"),
  register: () => console.log("context not initialised"),
  login: () => console.log("context not initialised"),
  logout: () => console.log("context not initialised"),
};

export const AuthContext = createContext<AuthContextType>(AuthInitContext);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const loggedUser = userCredential.user;
        console.log("login sucessfull", loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("login error", error);
      });
  };

  const register = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Register succesfull", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(" register error", error);
      });
  };

  const checkIfUserIsActive = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user is still logged in");
        console.log("uid", uid);
        setUser(user);
      } else {
        console.log("user is logged out");
        setUser(null);
      }
    });
  };
  useEffect(() => {
    checkIfUserIsActive();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        setUser(null);
      })
      .catch((error) => {
        console.log("An signOut error happened.");
      });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
