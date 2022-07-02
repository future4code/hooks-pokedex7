import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";
import {
  PokemonCard, 
  PokemonImageContainer, 
  PokemonImage, 
  CardBody, 
  CardTop,
  CardTopH3,
  CardBottom,
  PokemonType,
  PokemonHeartBtn
}from './styles/Styles'

const Pokemon = (props) => {
  const {favoritesPokemons, updateFavoritePokemons} = useContext(FavoriteContext)
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name)
  }

  const heart =favoritesPokemons.includes(pokemon.name) ? "❤️" : ' 🖤';
  return (
    <PokemonCard>
      <PokemonImageContainer>
        <PokemonImage
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
        />
      </PokemonImageContainer>
      <CardBody>
        <CardTop>
          <CardTopH3>{pokemon.name}</CardTopH3>
          <div>#{pokemon.id}</div>
        </CardTop>
        <CardBottom>
          <PokemonType>
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} classNamepokemon-type-text>
                  {type.type.name}
                </div>
              );
            })}
          </PokemonType>
          <PokemonHeartBtn onClick={onHeartClick}>
            {heart}
          </PokemonHeartBtn>
        </CardBottom>
      </CardBody>
    </PokemonCard>
  );
};
export default Pokemon;
