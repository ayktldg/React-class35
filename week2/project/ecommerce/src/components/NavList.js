import React from "react";
import NavListItem from "./NavListItem";
import { useState, useEffect } from "react";

const NavList = ({ fetchProducts }) => {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      if (!response.ok) {
        const message = `An error has occured while getting categories: ${response.status}`;
        throw new Error(message);
      }
      const categoryList = await response.json();
      setCategories(categoryList);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <ul className="category__list">
      {!errorMessage ? (
        categories.map((category, index) => (
          <NavListItem
            key={index}
            category={category}
            fetchProducts={fetchProducts}
          />
        ))
      ) : (
        <h3>{errorMessage}</h3>
      )}
    </ul>
  );
};

export default NavList;
