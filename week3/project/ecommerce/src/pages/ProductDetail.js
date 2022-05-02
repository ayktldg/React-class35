import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import fetchData from "../helpers/fetchData";
import useFetch from "../hooks/useFetch";
import { Spinner } from "@chakra-ui/react";
import styles from "../style/ProductDetail.module.css";
import iconStyles from "../style/FavIcon.module.css";
import { ReactComponent as HeartRegular } from "../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../assets/heart-solid.svg";

const ProductDetail = () => {
  const params = useParams();

  const {
    data: product,
    isLoading,
    errorMessage,
  } = useFetch(`/${params.productId}`);

  return (
    <div>
      {isLoading ? (
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
              <HeartRegular className={iconStyles.icon} />
              <HeartSolid
                className={iconStyles.icon}
                style={{ marginTop: "1rem" }}
              />
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
