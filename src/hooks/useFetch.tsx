// import React, { useEffect, useState } from "react";

// export interface CharacterType {
//   id: string;
//   name: string;
//   description: string;
//   image: string;
// }

// function useFetch() {
//   const [characters, setCharacters] = useState<CharacterType[]>([]);
//   const [error, setError] = useState(false);
//   const picUrl =
//     "https://starwars-databank-server.vercel.app/api/v1/characters";
//   let testVaribale = "ABC";

//   const fetchCharacterPics = async () => {
//     try {
//       const response = await fetch(picUrl);
//       const data = await response.json();
//       // console.log("data", data);
//       const characterList = data.data as CharacterType[];
//       console.log("characterList", characterList);
//       setCharacters(characterList);
//     } catch (error) {
//       setError(true);
//       console.error("Error", error);
//     }
//   };

//   useEffect(() => {
//     fetchCharacterPics();
//   }, []);

//   //* custom hook = returning object of variables instead of JSX (visible stuff)
//   return {
//     characters,
//     error,
//     testVaribale,
//   };
// }

// export default useFetch;
