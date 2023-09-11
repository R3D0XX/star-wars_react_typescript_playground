import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Fetching from "./components/Fetching";

function App() {
  return (
    <>
      <h1>Star-Wars</h1>
      <>
        <Fetching></Fetching>
      </>
    </>
  );
}

export default App;
