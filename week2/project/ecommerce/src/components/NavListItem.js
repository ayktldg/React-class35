import React, { useState } from "react";
import styles from "../style/NavListItem.module.css";

const NavListItem = ({
  category,
  fetchProducts,
  handleActiveCategory,
  activeCategory,
}) => {
  return (
    <li>
      <input
        className={`${styles.btn} ${
          activeCategory === category ? styles.active : ""
        }`}
        type="button"
        value={category}
        onClick={(e) => {
          fetchProducts(`/category/${e.target.value}`);
          handleActiveCategory(category);
        }}
      />
    </li>
  );
};

export default NavListItem;
