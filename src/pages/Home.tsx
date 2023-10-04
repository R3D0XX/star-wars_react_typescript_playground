import React from "react";
// import useCombinefetch from "../hooks/useCombinefetch";
import Fetching from "../components/Fetching";
import MyCard from "../components/MyCard";
import MyRealNavbar from "../components/MyNavbar";

const Home = () => {
  // const { setCategory, SetName } = useContext(CharactersContext);

  //! the typical Star-Wars header floating away to the top

  //! The Emperial March Theme

  //! some lightsaber action & awesome sound effect!

  //! all the good stuff :D
  return (
    <>
      <h1></h1>

      <MyRealNavbar />
      <Fetching />
    </>
  );
};

export default Home;
