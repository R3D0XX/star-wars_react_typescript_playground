import React from "react";
import useCombinefetch from "../hooks/useCombinefetch";

function Fetching() {
  const characterData = useCombinefetch(
    "https://starwars-databank-server.vercel.app/api/v1/characters"
  );
  console.log("data", data.data);

  const { data, error, loading } = useCombinefetch(
    "http https://swapi.dev/api/people/"
  );

  return <div>Fetching</div>;
}

export default Fetching;
