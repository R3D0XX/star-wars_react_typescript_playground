import React from "react";
import { Nav } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import { Outlet } from "react-router-dom";

const MyRoot: React.FC = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
    </>
  );
};

export default MyRoot;
