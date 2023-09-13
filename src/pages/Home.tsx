import React from "react";
import Fetching from "../components/Fetching";
import useFetch from "../hooks/useFetch";

type Props = {};

const Home = (props: Props) => {
  const { characters, error, testVaribale } = useFetch();
  console.warn(characters);
  return <div>Home</div>;
};

export default Home;
