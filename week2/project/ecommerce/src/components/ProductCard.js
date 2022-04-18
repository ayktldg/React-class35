import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <li className="product__card">
      <Link to={`/products/${product.id}`}>
        <div className="product__content">
          <img src={product.image} alt={product.title} />
          <span className="product__title">{product.title}</span>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
