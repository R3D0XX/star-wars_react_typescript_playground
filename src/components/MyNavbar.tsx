import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexct/AuthContext";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// function MyNavbar() {
//   // console.log("user", user);

// return (

function MyRealNavbar() {
  // const { user, setUser, logout } = useContext(AuthContext);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
          Star-Wars
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="login" as={NavLink}>
              Login
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item to="people" as={NavLink}>
                {" "}
                People
              </NavDropdown.Item>
              <NavDropdown.Item to="locations" as={NavLink}>
                {" "}
                Locations
              </NavDropdown.Item>
              <NavDropdown.Item to="organisations" as={NavLink}>
                Organisations
              </NavDropdown.Item>
              <NavDropdown.Item to="species" as={NavLink}>
                Species
              </NavDropdown.Item>
              <NavDropdown.Item to="vehicles" as={NavLink}>
                Vehicles
              </NavDropdown.Item>
              <NavDropdown.Item to="droids" as={NavLink}>
                Droids
              </NavDropdown.Item>
              <NavDropdown.Item to="creatures" as={NavLink}>
                Creatures
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item to="userhub" as={NavLink}>
                Userhub
              </NavDropdown.Item>
              <NavDropdown.Item to="favourites" as={NavLink}>
                Favourites
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//     <nav>
//       <Link to="/">Home</Link> |{" "}
//       {/* <Link to="details">Details</Link> |{" "} */}
//       <Link to="locations">Locations</Link> | <Link to="people">People</Link> |{" "}
//       <Link to="species">Species</Link> | <Link to="creatures">Creatures</Link>{" "}
//       | <Link to="organisations">Organisations</Link> |{" "}
//       <Link to="droids">Droids</Link> | <Link to="vehicles">Vehicles</Link> |{" "}
//       <Link to="registration">Registration</Link> |{" "}
//       {user && <Link to="userhub">User Hub</Link>}|{" "}
//       <Link to="favorites">Favorites</Link>|<Link to="login">Login</Link>
//       {user ? (
//         <Button variant="danger" onClick={logout}>
//           Logout{" "}
//         </Button>
//       ) : (
//         <Button variant="info">Login</Button>
//       )}
//     </nav>
//   );
// }

export default MyRealNavbar;
