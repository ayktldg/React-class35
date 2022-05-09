import React from "react";
import NavListItem from "../NavListItem/NavListItem";
import { useState } from "react";
import styles from "./NavList.module.css";
import useFetch from "../../hooks/useFetch";

const NavList = ({ onSelectCategory, activeCategory }) => {
  const { data: categories, errorMessage } = useFetch("categories");

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
