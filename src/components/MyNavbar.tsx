import React from "react";
import { Link, NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="Info">Info</Link> |{" "}
      <Link to="Movies">Movies</Link> | <Link to="Planets">Planets</Link> |{" "}
      <Link to="Species">Species</Link> | <Link to="Starships">Starships</Link>{" "}
      | <Link to="Vehicles">Vehicles</Link> |
    </nav>
  );
}

export default MyNavbar;
