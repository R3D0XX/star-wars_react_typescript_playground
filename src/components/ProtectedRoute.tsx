import React, { ReactNode, useContext } from "react";
import { AuthContext } from "../contexct/AuthContext";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useContext(AuthContext);

  return <>{user ? children : <h2>Login/Register to see this content</h2>}</>;
}

export default ProtectedRoute;
