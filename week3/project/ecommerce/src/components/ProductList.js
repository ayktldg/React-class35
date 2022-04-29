import React from "react";
import ProductCard from "./ProductCard";
import styles from "../style/ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
