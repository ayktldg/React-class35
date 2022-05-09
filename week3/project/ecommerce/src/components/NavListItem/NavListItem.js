import React from "react";
import styles from "./NavListItem.module.css";

const NavListItem = ({ category, activeCategory, onSelectCategory }) => {
  return (
    <li>
      <input
        className={`${styles.btn} ${
          activeCategory === category ? styles.active : ""
        }`}
        type="button"
        value={category}
        onClick={(e) => {
          onSelectCategory(e.target.value);
        }}
      />
    </li>
  );
};

export default NavListItem;
