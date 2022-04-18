import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <ul className="product__list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
