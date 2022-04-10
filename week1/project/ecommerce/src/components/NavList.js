import React from "react";
/* import categories from "../fake-data/all-categories"; */
import NavListItem from "./NavListItem";

const NavList = ({ categories, handleCategory }) => {
  return (
    <ul className="category__list">
      {categories.map((category, index) => (
        <NavListItem
          key={index}
          category={category}
          handleCategory={handleCategory}
        />
      ))}
    </ul>
  );
};

export default NavList;
