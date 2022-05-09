import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <li className={styles.card}>
      <Link to={`/products/${product.id}`}>
        <div className={styles.content}>
          <img src={product.image} className={styles.img} alt={product.title} />
          <span className={styles.title}>{product.title}</span>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
