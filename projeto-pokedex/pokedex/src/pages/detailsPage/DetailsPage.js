import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../components/constants/BASE_URL";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    pokeDetails();
  }, []);

  const pokeDetails = () => {
    axios
      .get(`${BASE_URL}/pokemon/${name}`)
      .then((response) => {
        console.log(response)
        setPokemonDetails(response.data);
      })
      .catch((error) => {});
  };

  const renderPokemonStats =
    pokemonDetails.stats &&
    pokemonDetails.stats.map((stat) => {
      return (
        <div key={stat.stat.name}>
          <p>{stat.stat.name}</p>
          <p>{stat.base_stat}</p>
        </div>
      );
    });

  const renderPokemonType =
    pokemonDetails.types &&
    pokemonDetails.types.map((type, index) => {
      return (
        <div key={index}>
          <p>{type.type.name}</p>
        </div>
      );
    });

  const renderPokemonMoves =
    pokemonDetails.moves &&
    pokemonDetails.moves.map((move, index) => {
      if (index < 10) {
        return (
          <div key={index}>
            <p>{move.move.name}</p>
          </div>
        );
      }
    });

  const removePokemonStorage = (param) => {
    localStorage.removeItem("pokemon");
    navigate(param);
  };

  return (
    <div>
      <h1>Pokemon Details</h1>
      {/* <img src={ pokemonDetails && pokemonDetails.sprites.front_default && pokemonDetails.sprites.front_default} /> */}
      <button onClick={() => removePokemonStorage("/")}>Home</button>
      <button onClick={() => removePokemonStorage("/pokedex")}>Pokedex</button>
      <h2>Status</h2>
      {renderPokemonStats}
      <h2>Types</h2>
      {renderPokemonType}
      <h2>Moves</h2>
      {renderPokemonMoves}
    </div>
  );
};
export default DetailsPage;
