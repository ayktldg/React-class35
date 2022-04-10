import React from "react";

const ProductCard = ({ product }) => {
  return (
    <li className="product__card">
      <div className="product__content">
        <img src={product.image} alt={product.title} />
        <span className="product__title">{product.title}</span>
      </div>
    </li>
  );
};

export default ProductCard;
