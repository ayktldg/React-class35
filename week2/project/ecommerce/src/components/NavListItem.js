import React, { useState } from "react";
import styles from "../style/NavListItem.module.css";

const NavListItem = ({ category, fetchProducts }) => {
  const [categoryStatus, setCategoryStatus] = useState(false);
  return (
    <li>
      <input
        className={`${styles.btn} ${categoryStatus ? styles.active : ""}`}
        type="button"
        value={category}
        onClick={(e) => {
          fetchProducts(`/category/${e.target.value}`);
          setCategoryStatus(!categoryStatus);
        }}
      />
    </li>
  );
};

export default NavListItem;
