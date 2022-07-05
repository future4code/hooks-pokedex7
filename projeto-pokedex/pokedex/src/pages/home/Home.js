import React, { useContext } from "react";
import GlobalStateContext from "./../../globalState/GlobalStateContext";
import { useNavigate } from "react-router-dom";

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
      alert("deu certo");
    } else {
      alert("deu errado");
    }
  };

  const seeDetails = (param) =>{
    navigate(`/pokemon/${param}`)
  }

  const renderPokemons =
    pokemon &&
    pokemon.map((poke) => {
      return (
        <div key={poke.id}>
          <p>{poke.name}</p>
          <img src={poke.sprites.front_default} alt="Pokemon" />
          <button onClick={() =>seeDetails(poke.name)}>See Details</button>
          <button
            onClick={() =>
              addPokemons(poke.id, poke.sprites.front_default, poke.name)
            }
          >
            Add Pokedex
          </button>
        </div>
      );
    });

  return (
    <div>
      <h1>List Pokemon Test</h1>
      <button onClick={() => navigate("/pokedex")}>pokedex</button>
      {renderPokemons}
    </div>
  );
};
export default Home;
