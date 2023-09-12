import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Fetching from "./components/Fetching";
import MyCard from "./components/MyCard";

function App() {
  return (
    <>
      <h1>Star-Wars</h1>
      <>
        <Fetching></Fetching>
        {/* <MyCard Characters={} */}
      </>
    </>
  );
}

export default App;
