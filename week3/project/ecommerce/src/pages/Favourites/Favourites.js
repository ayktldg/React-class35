import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FavouritesContext from "../../context/FavouritesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Spinner } from "@chakra-ui/react";

const Favourites = () => {
  const [products, setProducts] = useState();
  const { favouriteProductIds } = useContext(FavouritesContext);

  useEffect(() => {
    fetchData().catch((err) => console.log(err));
  }, [favouriteProductIds]);

  const fetchData = async () => {
    const data = await Promise.all(
      favouriteProductIds.map(async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          const message = `An error has occured while getting data: ${response.status}`;
          throw new Error(message);
        }
        return response;
      })
    );
    const jsonData = await Promise.all(data.map((result) => result.json()));
    setProducts(jsonData);
  };

  return (
    <div>
      <Navbar />
      {!products ? (
        <Spinner className="spinner" />
      ) : favouriteProductIds.length !== 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <h3>There is no favourite item</h3>
      )}
    </div>
  );
};

export default Favourites;
