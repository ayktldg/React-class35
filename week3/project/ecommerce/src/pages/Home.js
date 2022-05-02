import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NavList from "../components/NavList";
import ProductList from "../components/ProductList";
import useFetch from "../hooks/useFetch";
import { Spinner } from "@chakra-ui/react";

const Home = () => {
  const [productCategory, setProductCategory] = useState("");
  const { data: products, isLoading, errorMessage } = useFetch(productCategory);

  const onChangeProductCategory = (endpoint) => {
    setProductCategory(endpoint);
  };

  return (
    <div>
      <Navbar />
      <main>
        <NavList onChangeProductCategory={onChangeProductCategory} />
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
