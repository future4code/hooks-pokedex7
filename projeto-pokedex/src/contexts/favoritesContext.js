import React from 'react';
const FavoriteContext = React.createContext({
    favoritesPokemons: [],
    updateFavoritesPokemons: (id) => null
})
export const FavoriteProvider = FavoriteContext.Provider
export default FavoriteContext 