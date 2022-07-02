import React, {useContext} from "react";
import FavoriteContext from '../contexts/favoritesContext'
import {Nav, Img} from './styles/Styles'

const Navbar = () => {
  const {favoritesPokemons} = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <Nav>
      <div>
        <Img alt="pokeapi-logo" src={logoImg}/>
      </div>
      <div>{favoritesPokemons.length}❤️</div>
    </Nav>
  );
};
export default Navbar;
