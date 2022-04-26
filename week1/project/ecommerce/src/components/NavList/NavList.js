import React from "react";
import NavListItem from "../NavListItem/NavListItem";
import categories from "../../fake-data/all-categories";
import styles from "./NavList.module.css";

const NavList = ({ onSelectCategory, activeCategory }) => {
  return (
    <ul className={styles.list}>
      {categories.map((category, index) => (
        <NavListItem
          key={index}
          category={category}
          onSelectCategory={onSelectCategory}
          activeCategory={activeCategory}
        />
      ))}
    </ul>
  );
};

export default NavList;
