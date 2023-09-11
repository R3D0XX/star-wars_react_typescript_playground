import React, { useEffect, useState } from "react";

interface CharacterType {
  id: string;
  name: string;
  description: string;
  image: string;
}

function Fetching() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(false);
  const picUrl =
    "https://starwars-databank-server.vercel.app/api/v1/characters";

  const fetchCharacterPics = async () => {
    const response = await fetch(picUrl);
    const data = await response.json();
    // console.log("data", data);
    const characterList = data.data as CharacterType[];
    console.log("characterList", characterList);
    setCharacters[characterList];
  };
  useEffect(() => {
    fetchCharacterPics();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {error ? (
        <p> Loading Error.</p>
      ) : (
        <ul>
          {characters &&
            characters.map((character, index) => (
              <li key={index}>{character.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Fetching;
