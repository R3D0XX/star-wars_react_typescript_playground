import { useEffect, useState } from "react";

interface ReturnData<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useCombinefetch<T>(url: string): ReturnData<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const result = (await response.json()) as T;
          setData(result);
          setError(null); // Reset error if the request is successful
        } else {
          const errorResponse = (await response.json()) as { error: string };
          setError(errorResponse.error);
        }
      } catch (e) {
        console.error("Error fetching data:", e);
        setError("An error occurred while fetching data.");
      } finally {
        // Set loading to false after the request is completed
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run the effect whenever the URL changes

  return {
    data,
    loading,
    error,
  };
}

export default useCombinefetch;
