import React from "react";
import useCombinefetch from "../hooks/useCombinefetch";

function Fetching() {
  const databankUrl =
    "https://starwars-databank-server.vercel.app/api/v1/characters";
  const swapiUrl = "https://swapi.dev/api/people/";

  const {
    data: charactersData,
    error: charactersError,
    loading: charactersLoading,
  } = useCombinefetch(databankUrl);

  const {
    data: swapiData,
    error: swapiError,
    loading: swapiLoading,
  } = useCombinefetch(swapiUrl);

  console.log("Characters Data", charactersData);
  console.log("SWAPI Data", swapiData);

  return (
    <div>
      {charactersLoading || swapiLoading ? (
        "Loading..."
      ) : charactersError || swapiError ? (
        "Error fetching data"
      ) : (
        // Render your data here
        <div>{/* Render charactersData and swapiData as needed */}</div>
      )}
    </div>
  );
}

export default Fetching;
