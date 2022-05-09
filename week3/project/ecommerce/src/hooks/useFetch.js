import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = "https://fakestoreapi.com/products/";

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}${endpoint}`);
      if (!response.ok) {
        const message = `An error has occured while getting data: ${response.status}`;
        throw new Error(message);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, errorMessage };
};

export default useFetch;
