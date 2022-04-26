import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <li className={styles.card}>
      <div className={styles.content}>
        <img src={product.image} className={styles.img} alt={product.title} />
        <span className={styles.title}>{product.title}</span>
      </div>
    </li>
  );
};

export default ProductCard;
