import React from "react";
import NavListItem from "../NavListItem/NavListItem";
import { useState, useEffect } from "react";
import fetchData from "../../helpers/fetchData";
import styles from "./NavList.module.css";

const NavList = ({ onSelectCategory, activeCategory }) => {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const categories = await fetchData("categories");
      setCategories(categories);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <ul className={styles.list}>
      {!errorMessage ? (
        categories.map((category, index) => (
          <NavListItem
            key={index}
            category={category}
            onSelectCategory={onSelectCategory}
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
