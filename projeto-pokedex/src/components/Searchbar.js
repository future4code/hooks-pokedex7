import React, { useState } from "react";
import {SearchBarContainer, SearchBar, SearchBarInput, SearchBarBtn} from './styles/Styles'

const Searchbar = (props) => {
  const [search, setSearch] = useState("dito");
  const {onSearch} = props
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
    if(event.target.value.length === 0){
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <SearchBarContainer>
      <SearchBar>
        <SearchBarInput placeholder="buscar pokemon" onChange={onChangeHandler} /> 
      </SearchBar>
      <SearchBarBtn>
        <button onClick={onButtonClickHandler}>Buscar</button>
      </SearchBarBtn>
    </SearchBarContainer>
  );
};

export default Searchbar;
