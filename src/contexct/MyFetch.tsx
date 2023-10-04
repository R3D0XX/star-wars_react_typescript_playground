import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import useCombinefetch from "../hooks/useCombinefetch";

function MyFetch() {
  interface FetchingContextData {
    data: any[] | null;
    error: string | null;
    loading: boolean;
    fetchData: (category: string, name?: string) => void;
  }

  const FetchingContext = createContext<FetchingContextData | undefined>(
    undefined
  );
  export function FetchingProvider({ children }: { children: ReactNode }) {
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

    const fetchData = (category: string, name?: string) => {
      // Implementieren Sie hier die Logik zum Aktualisieren der Daten basierend auf der Kategorie und dem Namen
    };

    const contextValue: FetchingContextData = {
      data: charactersData ? charactersData.data : null,
      error: charactersError,
      loading: charactersLoading,
      fetchData,
    };

    return (
      <FetchingContext.Provider value={contextValue}>
        {children}
      </FetchingContext.Provider>
    );
    export function useDataFetching() {
      const context = useContext(FetchingContext);
      if (!context) {
        throw new Error(
          "useDataFetching must be used within a DataFetchingProvider"
        );
      }
      return context;
    }
  }
}

export default MyFetch;
