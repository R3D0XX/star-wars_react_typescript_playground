import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("Error", Error);

  return <div>Something went wrong....</div>;
};

export default ErrorPage;
