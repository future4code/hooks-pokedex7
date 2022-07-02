import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemons";
import {PokedexHeader, PokedexGrid} from './styles/Styles'

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    if(page > 0){
      setPage(page-1)
    }
  }

  const onRightClickHandler = () => {
    if(page+1 !== totalPages){
      setPage(page+1)
    }
  }

  return (
    <div>
      <PokedexHeader>
        <h1>Pokedex</h1>
        <Pagination
          page={page+1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </PokedexHeader>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <PokedexGrid>
            {pokemons && pokemons.map((pokemon, index) => {
                return (
                    <div>
                        <Pokemon key={index} pokemon={pokemon}/>
                    </div>
                )
            })}
        </PokedexGrid>
      )}
    </div>
  );
};

export default Pokedex;
