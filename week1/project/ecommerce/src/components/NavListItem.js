import React, { useState } from "react";

const NavListItem = ({ category, handleCategory }) => {
  const [categoryStatus, setCategoryStatus] = useState(false);
  return (
    <li className="category__item">
      <input
        className={`category__btn ${
          categoryStatus ? "category__btn--active" : ""
        }`}
        type="button"
        value={category}
        onClick={(e) => {
          handleCategory(e.target.value);
          setCategoryStatus(!categoryStatus);
        }}
      />
    </li>
  );
};

export default NavListItem;
