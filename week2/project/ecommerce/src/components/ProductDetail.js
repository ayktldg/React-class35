import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../helpers/fetchData";
import { Spinner } from "@chakra-ui/react";
import styles from "../style/ProductDetail.module.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const params = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      const product = await fetchData(`/${params.productId}`);
      console.log(product);
      setIsLoading(false);
      setProduct(product);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

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
