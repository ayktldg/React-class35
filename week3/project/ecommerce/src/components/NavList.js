import React from "react";
import NavListItem from "./NavListItem";
import { useState } from "react";
import styles from "../style/NavList.module.css";
import useFetch from "../hooks/useFetch";

const NavList = ({ onChangeProductCategory }) => {
  const { data: categories, errorMessage } = useFetch(
    "/categories",
    "categories"
  );
  const [activeCategory, setActiveCategory] = useState();

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
            handleActiveCategory={handleActiveCategory}
            onChangeProductCategory={onChangeProductCategory}
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
