import React, { useContext } from "react";
import GlobalStateContext from "./../../globalState/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import { ButtonPokemonCard, ImgPokeCard, HomeContainerGrid, ImgHeader, HomeGlobalContainer, PokemonCard , PokeNameCard, DivButton, ContainerCard, HeaderContainer} from "../../styles/styles";

const Home = () => {
  const navigate = useNavigate();
  const { pokemon, pokedex, setPokedex } = useContext(GlobalStateContext);

  const addPokemons = (id, img, name) => {
    const position = pokedex.findIndex((equal) => {
      if (equal.id === id) {
        return true;
      } else {
        return false;
      }
    });

    if (position === -1) {
      const newPoke = {
        id: id,
        img: img,
        name: name,
      };

      const newListPoke = [...pokedex, newPoke];

      setPokedex(newListPoke);
      alert("Added Pokemon!");
    } else {
      alert("This pokemon is already in the pokedex!");
    }
  };

  const seeDetails = (param) =>{
    navigate(`/pokemon/${param}`)
  }

  const renderPokemons =
    pokemon.map((poke) => {
      return (
        <PokemonCard>
          <div key={poke.id}>

            <ContainerCard>
            <PokeNameCard>
          <h2>{poke.name.toUpperCase()}</h2>
            </PokeNameCard>
          
          <ImgPokeCard src={poke.sprites.front_default} alt="Pokemon" />
          </ContainerCard>

          <DivButton>
          <ButtonPokemonCard onClick={() =>seeDetails(poke.name)}>See Details</ButtonPokemonCard>
          <ButtonPokemonCard
            onClick={() =>
              addPokemons(poke.id, poke.sprites.front_default, poke.name)
            }
          >
            Add Pokedex
          </ButtonPokemonCard>
          </DivButton>
          </div>
          </PokemonCard>
      );
    });


  return (
    <div>
      <HomeGlobalContainer>
        <HeaderContainer>
      <ImgHeader src="https://pokedex.sleduardo.dev/img/logo.svg"/>
      <button onClick={() => navigate("/pokedex")}>pokedex</button>
       </HeaderContainer>
      <HomeContainerGrid>
        
      {renderPokemons}
          
      </HomeContainerGrid>
      </HomeGlobalContainer>
    </div>
  );
};
export default Home;
