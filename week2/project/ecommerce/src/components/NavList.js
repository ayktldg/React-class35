import React from "react";
import NavListItem from "./NavListItem";
import { useState, useEffect } from "react";
import fetchData from "../helpers/fetchData";
import styles from "../style/NavList.module.css";

const NavList = ({ fetchProducts }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const categories = await fetchData("/categories", "categories");
      setCategories(categories);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <ul className={styles.list}>
      {!errorMessage ? (
        categories.map((category, index) => (
          <NavListItem
            key={index}
            category={category}
            fetchProducts={fetchProducts}
            handleActiveCategory={handleActiveCategory}
            activeCategory={activeCategory}
          />
        ))
      ) : (
        <h3>{errorMessage}</h3>
      )}
    </ul>
  );
};

export default NavList;
