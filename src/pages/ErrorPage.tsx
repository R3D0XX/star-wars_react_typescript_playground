import React from "react";
import { useRouteError } from "react-router-dom";

interface RouteErrorType {
  data: string;
  error: {
    message: string;
  };
  status: number;
  statusText: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouteErrorType;
  console.log("Error", error);

  return (
    <>
      <h1>Something went wrong...</h1>
      <h3>{error.error.message}</h3>
    </>
  );
};

export default ErrorPage;
