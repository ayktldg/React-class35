import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavList from "../../components/NavList/NavList";
import ProductList from "../../components/ProductList/ProductList";
import useFetch from "../../hooks/useFetch";
import { Spinner } from "@chakra-ui/react";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [categoryEndPoint, setCategoryEndPoint] = useState("");
  const {
    data: products,
    isLoading,
    errorMessage,
  } = useFetch(categoryEndPoint);

  const onSelectCategory = (category) => {
    console.log("active category: ", category);
    setCategoryEndPoint(`category/${category}`);
    setActiveCategory(category);
  };

  return (
    <div>
      <Navbar />
      <main>
        <NavList
          onSelectCategory={onSelectCategory}
          activeCategory={activeCategory}
        />
        {!isLoading ? (
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
