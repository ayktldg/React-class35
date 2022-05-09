import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import iconStyles from "../../style/FavIcon.module.css";
import { ReactComponent as HeartRegular } from "../../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../../assets/heart-solid.svg";
import FavouritesContext from "../../context/FavouritesContext";

const ProductCard = ({ product }) => {
  const { favouriteProductIds, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const favouritedMovie = favouriteProductIds.find((id) => id === product.id);

  return (
    <li className={styles.card}>
      <Link to={`/products/${product.id}`}>
        <div className={styles.content}>
          <img src={product.image} className={styles.img} alt={product.title} />
          {favouritedMovie ? (
            <HeartSolid
              className={iconStyles.icon}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFromFavourites(product.id);
              }}
            />
          ) : (
            <HeartRegular
              className={iconStyles.icon}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                addToFavourites(product.id);
              }}
            />
          )}

          <span className={styles.title}>{product.title}</span>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
