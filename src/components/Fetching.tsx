import React, { useEffect, useState } from "react";
import useCombinefetch from "../hooks/useCombinefetch";
import { useParams } from "react-router-dom";
import Species from "../pages/Species";

function Fetching() {
  const { category, name } = useParams<{ category: string; name?: string }>();
  const [databankUrl, setDatabankUrl] = useState<string>("");

  useEffect(() => {
    if (category === "characters") {
      if (name) {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/characters/name/${name}`
        );
      } else {
        setDatabankUrl(
          "https://starwars-databank-server.vercel.app/api/v1/characters"
        );
      }
    } else if (category === "creatures") {
      if (name) {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/creatures/name/${name}`
        );
      } else {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/creatures/`
        );
      }
    } else if (category === "droids") {
      if (name) {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/droids/name/${name}`
        );
      } else {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/droids`
        );
      }
    } else if (category === "locations") {
      if (name) {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/locations/name/${name}`
        );
      } else {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/locations/`
        );
      }
    } else if (category === "organizations") {
      if (name) {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/organizations/name/${name}`
        );
      } else {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/organizations/`
        );
      }
    } else if (category === "species") {
      if (name) {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/species/name/${name}`
        );
      } else {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/species/`
        );
      }
    } else if (category === "vehicles") {
      if (name) {
        setDatabankUrl(
          `https://starwars-databank-server.vercel.app/api/v1/vehicles/name/${name}`
        );
      } else {
        setDatabankUrl(
          "https://starwars-databank-server.vercel.app/api/v1/vehicles"
        );
      }
    }
  }, [category, name]);

  const {
    data: charactersData,
    error: charactersError,
    loading: charactersLoading,
  } = useCombinefetch(databankUrl);

  return (
    <div>
      {charactersLoading ? (
        "Loading..."
      ) : charactersError ? (
        "Error while loading the data..."
      ) : (
        <div>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div>
            {charactersData &&
              charactersData.data.map((character: any, index: number) => (
                <div key={index}>
                  <img
                    src={character.image}
                    style={{ width: "100px" }}
                    alt="Character"
                  />
                  <p>{character.name}</p>
                  <p>{character.description}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

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

//   // console.log("Characters Data", charactersData);
//   // console.log("SWAPI Data", swapiData);

//   //* To combine the information of the apis i need something like this!
//   //   const fetchSwappi = async () => {
//   //     const response = await fetch("asdasd");
//   //     const result = await response.json();
//   // //* try to figure out how to deep save the array, so i dont change the original array with the next step
//   //     const arrayOfObjects = result.map((character) => {
//   //       const responseDabank = await fetch("url...+character.name");
//   //       const resultDabank = await responseDabank.json();
//   //       const imageToadd = resultDabank.image;
//   //       const descriptionToAdd = resultDatabank.description;
//   //       return { ...character, image: imageToadd, description: descriptionToAdd };
//   //     });
//   //   };

//   return (
//     <div>
//       {charactersLoading || swapiLoading ? (
//         "Loading..."
//       ) : charactersError || swapiError ? (
//         "Error fetching data"
//       ) : (
//         <div>
//           <h2>Characters Data</h2>
//           <div>
//             {charactersData &&
//               charactersData.data.map((character, index) => (
//                 <div key={index}>
//                   <img
//                     src={character.image}
//                     style={{ width: "100px" }}
//                     alt="Character"
//                   />
//                   <p>{character.description}</p>
//                 </div>
//               ))}
//           </div>

//           <h2>SWAPI Data</h2>
//           <div>
{
  /* {console.log("swapiData", swapiData)} */
}

//             {swapiData &&
//               swapiData.results.map((data, index) => (
//                 <div key={index}>{data.name}</div>
//               ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

export default Fetching;
