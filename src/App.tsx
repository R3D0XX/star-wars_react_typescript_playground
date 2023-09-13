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
import Fetching from "./components/Fetching";
import MyCard from "./components/MyCard";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";

function App() {
    const router = createBrowserRouter(

      createRoutesFromElements(
        <Route path="/">
          <Route path="Home" element={<Home/>}/>
          <Route path="Movies" element={<Movies />} />
          <Route path="People" element={<People />} />
          <Route path="Planets" element={<Planets />} />
          <Route path="Species" element={<Species />} />
          <Route path="Starships" element={<Starships />} />
          <Route path="Vehicles" element={<Vehicles />} />

        </Route>
  )

  return (
    <>
      <RouterProvider router={router} />
      
      <Outlet/>
      <>
        <h1>Star-Wars</h1>
        <Home />
        {/* <Fetching></Fetching> */}
      </>
    </>
  );
}

export default App;
