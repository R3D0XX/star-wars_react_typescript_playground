import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexct/AuthContext";

function MyNavbar() {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="details">Details</Link> |{" "}
      <Link to="movies">Movies</Link> | <Link to="people">People</Link> |{" "}
      <Link to="planets">Planets</Link> | <Link to="species">Species</Link> |{" "}
      <Link to="starships">Starships</Link> |{" "}
      <Link to="vehicles">Vehicles</Link> |{" "}
      <Link to="registratiom">Registration</Link>
    </nav>
  );
}

export default MyNavbar;
