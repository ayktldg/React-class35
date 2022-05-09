import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const baseUrl = "https://fakestoreapi.com/products/";
      const response = await fetch(`${baseUrl}${endpoint}`);
      if (!response.ok) {
        const message = `An error has occured while getting data: ${response.status}`;
        throw new Error(message);
      }
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  return { data, isLoading, errorMessage };
};

export default useFetch;
