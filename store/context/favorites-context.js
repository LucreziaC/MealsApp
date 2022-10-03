import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealId, setFavoriteMealId] = useState([]);

  function addFavorite(id) {
    setFavoriteMealId((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealId((currentFavIds) =>
      currentFavIds.filter((mealID) => mealID !== id)
    );
  }

  const value = {
    ids: favoriteMealId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoriteContextProvider;
