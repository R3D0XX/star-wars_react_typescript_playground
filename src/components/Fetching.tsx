import React from "react";
import useCombinefetch from "../hooks/useCombinefetch";

// interface dataBank {
//   data (
//     id: string;
//     name: string;
//     description: string
//     image: string)
// }

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

  // console.log("Characters Data", charactersData);
  // console.log("SWAPI Data", swapiData);

  //* To combine the information of the apis i need something like this!
  //   const fetchSwappi = async () => {
  //     const response = await fetch("asdasd");
  //     const result = await response.json();
  // //* try to figure out how to deep save the array, so i dont change the original array with the next step
  //     const arrayOfObjects = result.map((character) => {
  //       const responseDabank = await fetch("url...+character.name");
  //       const resultDabank = await responseDabank.json();
  //       const imageToadd = resultDabank.image;
  //       const descriptionToAdd = resultDatabank.description;
  //       return { ...character, image: imageToadd, description: descriptionToAdd };
  //     });
  //   };

  return (
    <div>
      {charactersLoading || swapiLoading ? (
        "Loading..."
      ) : charactersError || swapiError ? (
        "Error fetching data"
      ) : (
        <div>
          <h2>Characters Data</h2>
          <div>
            {charactersData &&
              charactersData.data.map((character, index) => (
                <div key={index}>
                  <img
                    src={character.image}
                    style={{ width: "100px" }}
                    alt="Character"
                  />
                  <p>{character.description}</p>
                </div>
              ))}
          </div>

          <h2>SWAPI Data</h2>
          <div>
            {console.log("swapiData", swapiData)}

            {swapiData &&
              swapiData.results.map((data, index) => (
                <div key={index}>{data.name}</div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Fetching;
