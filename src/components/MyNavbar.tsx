import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexct/AuthContext";
import { Button } from "react-bootstrap";

function MyNavbar() {
  const { user, setUser, logout } = useContext(AuthContext);
  console.log("user", user);

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="details">Details</Link> |{" "}
      <Link to="movies">Movies</Link> | <Link to="people">People</Link> |{" "}
      <Link to="planets">Planets</Link> | <Link to="species">Species</Link> |{" "}
      <Link to="starships">Starships</Link> |{" "}
      <Link to="vehicles">Vehicles</Link> |{" "}
      <Link to="registration">Registration</Link> |{" "}
      {user && <Link to="userhub">User Hub</Link>}|{" "}
      <Link to="login">Login</Link>
      {user ? (
        <Button variant="danger" onClick={logout}>
          Logout{" "}
        </Button>
      ) : (
        <Button variant="info">Login</Button>
      )}
    </nav>
  );
}

export default MyNavbar;
