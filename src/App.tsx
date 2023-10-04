import { useState } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./components/MyCard";
import Home from "./pages/Home";
import People from "./pages/People";
import Species from "./pages/Species";
import Vehicles from "./pages/Vehicles";
import ErrorPage from "./pages/ErrorPage";
import MyRoot from "./components/MyRoot";
import Registration from "./pages/Registration";
import Details from "./pages/Details";
import { app, auth, db } from "./config/firebaseConfig";
import { AuthContextProvider } from "./contexct/AuthContext";
import Userhub from "./pages/Userhub";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Favourites from "./pages/Favorites";
import Droids from "./pages/Droids";
import Locations from "./pages/Locations";
import Creatures from "./pages/Creatures";
import Organisations from "./pages/Organisations";
import MyRealNavbar from "./components/MyNavbar";
import Fetching from "./components/Fetching";

function App() {
  // console.log("db", db);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MyRoot />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="registration" element={<Registration />} />

        <Route path="people">
          <Route index element={<People />} />
          <Route path=":name" element={<Details />} />{" "}
        </Route>

        <Route path="droids">
          <Route index element={<Droids />} />
          <Route path=":name" element={<Details />} />{" "}
        </Route>

        <Route path="vehicles">
          <Route index element={<Vehicles />} />
          <Route path=":name" element={<Details />} />{" "}
        </Route>

        <Route path="species">
          <Route index element={<Species />} />
          <Route path=":name" element={<Details />} />
        </Route>

        <Route path="organisations">
          <Route index element={<Organisations />} />
          <Route path=":name" element={<Details />} />
        </Route>

        <Route path="locations">
          <Route index element={<Locations />} />
          <Route path=":name" element={<Details />} />
        </Route>

        <Route path="creatures">
          <Route index element={<Creatures />} />
          <Route path=":name" element={<Details />} />
        </Route>

        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />

        <Route
          path="userhub"
          element={
            <ProtectedRoute>
              <Userhub />
            </ProtectedRoute>
          }
        />
        <Route
          path="favourites"
          element={
            <ProtectedRoute>
              <Favourites />
            </ProtectedRoute>
          }
        />
      </Route>
    )
  );

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />

      <Outlet />
      {/* <MyRealNavbar /> */}
      {/* <Fetching /> */}
    </AuthContextProvider>
  );
}

export default App;
