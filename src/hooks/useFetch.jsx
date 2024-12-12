import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, loading, error };
}

export default useFetch;