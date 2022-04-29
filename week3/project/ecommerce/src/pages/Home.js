import React from "react";
import Navbar from "../components/Navbar";
import NavList from "../components/NavList";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import fetchData from "../helpers/fetchData";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (endpoint = "") => {
    try {
      setIsLoading(true);
      const products = await fetchData(endpoint, "products");
      setIsLoading(false);
      setProducts(products);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        {" "}
        <NavList fetchProducts={fetchProducts} />
        {isLoading ? (
          <Spinner className="spinner" />
        ) : !errorMessage ? (
          <ProductList products={products} />
        ) : (
          <h3>{errorMessage}</h3>
        )}
      </main>
    </div>
  );
};

export default Home;
