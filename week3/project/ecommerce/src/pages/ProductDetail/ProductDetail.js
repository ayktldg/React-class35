import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Spinner } from "@chakra-ui/react";
import styles from "./ProductDetail.module.css";
import iconStyles from "../../style/FavIcon.module.css";
import { ReactComponent as HeartRegular } from "../../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../../assets/heart-solid.svg";
import FavouritesContext from "../../context/FavouritesContext";

const ProductDetail = () => {
  const params = useParams();
  const { favouriteProductIds, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const {
    data: product,
    isLoading,
    errorMessage,
  } = useFetch(`${params.productId}`);

  const favouritedMovie = favouriteProductIds.find((id) => id === product.id);

  return (
    <div>
      {!isLoading ? (
        <Spinner className="spinner" />
      ) : !errorMessage ? (
        <div>
          <h1>{product.title}</h1>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={product.image}
                alt={product.title}
              />
              {favouritedMovie ? (
                <HeartSolid
                  className={iconStyles.icon}
                  onClick={() => {
                    removeFromFavourites(product.id);
                  }}
                />
              ) : (
                <HeartRegular
                  className={iconStyles.icon}
                  onClick={() => {
                    addToFavourites(product.id);
                  }}
                />
              )}
            </div>
            <p className={styles.desc}>{product.description}</p>
          </div>
        </div>
      ) : (
        <h3>{errorMessage}</h3>
      )}
    </div>
  );
};

export default ProductDetail;
