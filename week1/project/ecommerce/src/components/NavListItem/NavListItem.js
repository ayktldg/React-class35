import React from "react";
import styles from "./NavListItem.module.css";

const NavListItem = ({ category, onSelectCategory, activeCategory }) => {
  return (
    <li>
      <input
        className={`${styles.btn} ${
          category === activeCategory ? styles.active : ""
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
