import React, {useContext} from "react";
import FavoriteContext from '../contexts/favoritesContext'

const Navbar = () => {
  const {favoritesPokemons} = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </div>
      <div>{favoritesPokemons.length}❤️</div>
    </nav>
  );
};
export default Navbar;
