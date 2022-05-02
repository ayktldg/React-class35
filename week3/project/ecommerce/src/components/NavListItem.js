import React from "react";
import styles from "../style/NavListItem.module.css";

const NavListItem = ({
  category,
  handleActiveCategory,
  activeCategory,
  onChangeProductCategory,
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
          onChangeProductCategory(`/category/${e.target.value}`);
          handleActiveCategory(category);
        }}
      />
    </li>
  );
};

export default NavListItem;
