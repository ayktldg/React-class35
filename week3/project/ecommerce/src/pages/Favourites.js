import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import FavouritesContext from "../context/FavouritesContext";
//import useFetch from "../hooks/useFetch";

const Favourites = () => {
  const { favouriteProductIds, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  return (
    <div>
      <Navbar />
      <div>
        Favourites
        {favouriteProductIds.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
