import React from "react";
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
