import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/ProductCard.module.css";
import iconStyles from "../style/FavIcon.module.css";
import { ReactComponent as HeartRegular } from "../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../assets/heart-solid.svg";

const ProductCard = ({ product }) => {
  return (
    <li className={styles.card}>
      <Link to={`/products/${product.id}`}>
        <div className={styles.content}>
          <img src={product.image} className={styles.img} alt={product.title} />
          <HeartRegular className={iconStyles.icon} />
          <HeartSolid
            className={iconStyles.icon}
            style={{ marginTop: "1rem" }}
          />
          <span className={styles.title}>{product.title}</span>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
