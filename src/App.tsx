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
import "./App.css";
import MyCard from "./components/MyCard";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import ErrorPage from "./pages/ErrorPage";
import MyRoot from "./components/MyRoot";
import Registration from "./pages/Registration";
import Details from "./pages/Details";
import { app, auth } from "./config/firebaseConfig";
import { AuthContextProvider } from "./contexct/AuthContext";

function App() {
  console.log("auth", auth);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MyRoot />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="movies" element={<Movies />} />
        <Route path="people" element={<People />} />
        <Route path="people/:name" element={<Details />} />
        <Route path="planets" element={<Planets />} />
        <Route path="species" element={<Species />} />
        <Route path="starships" element={<Starships />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    )
  );

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <Outlet />
      </AuthContextProvider>
      <>
        <h1>Star-Wars</h1>
        <Home />
      </>
    </>
  );
}

export default App;
