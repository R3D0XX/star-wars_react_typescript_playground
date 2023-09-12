import React, { useEffect, useState } from "react";

export interface CharacterType {
  id: string;
  name: string;
  description: string;
  image: string;
}

function Fetching() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [error, setError] = useState(false);
  const picUrl =
    "https://starwars-databank-server.vercel.app/api/v1/characters";

  const fetchCharacterPics = async () => {
    try {
      const response = await fetch(picUrl);
      const data = await response.json();
      // console.log("data", data);
      const characterList = data.data as CharacterType[];
      console.log("characterList", characterList);
      setCharacters(characterList);
    } catch (error) {
      setError(true);
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchCharacterPics();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      {error ? (
        <p>Loading Error.</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fetching;
