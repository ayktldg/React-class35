import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import allProducts from "../../fake-data/all-products";
import styles from "./ProductList.module.css";

const ProductList = ({ selectedCategory }) => {
  const handleProductCategory = (productList) => {
    const result = productList.filter(
      (product) => product.category === selectedCategory
    );
    return result;
  };

  const products = !selectedCategory
    ? allProducts
    : handleProductCategory(allProducts);

  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
