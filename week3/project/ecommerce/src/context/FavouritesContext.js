import { createContext, useState } from "react";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favouriteProductIds, setFavouriteProductIds] = useState([]);

  const addToFavourites = (id) => {
    setFavouriteProductIds([id, ...favouriteProductIds]);
  };

  const removeFromFavourites = (id) => {
    setFavouriteProductIds(
      favouriteProductIds.filter((productId) => productId !== id)
    );
  };

  return (
    <FavouritesContext.Provider
      value={{ favouriteProductIds, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
