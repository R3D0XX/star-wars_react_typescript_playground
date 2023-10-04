import React from "react";
import Fetching from "../components/Fetching";
import MyCard from "../components/MyCard";
import MyRealNavbar from "../components/MyNavbar";

const People = () => {
  return (
    <div>
      <h1>Star Wars Character List</h1>
      <Fetching>
        {({ data: charactersData, loading: charactersLoading }) => (
          <div>
            {charactersLoading ? (
              "Laden..."
            ) : charactersData.error ? (
              "Fehler beim Abrufen der Daten"
            ) : (
              <div>
                {charactersData &&
                  charactersData.data.map((character, index) => (
                    <MyCard key={index} Characters={character} />
                  ))}
              </div>
            )}
          </div>
        )}
      </Fetching>
      {/* <MyRealNavbar /> */}
    </div>
  );
};

export default People;
