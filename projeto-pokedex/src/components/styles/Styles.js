import styled from "styled-components";

export const Nav = styled.nav`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Img = styled.img`
  width: 160px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  margin: 0px auto;
  padding: 0 20px;
  align-items: center;
`;

export const SearchBar = styled.div`
  background-color: white;
  margin-right: 20px;
`;

export const SearchBarInput = styled.input`
  padding: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: none;
`;

export const SearchBarBtn = styled.div`
  background-color: #0e6f9f;
  border: none;
  border-radius: 5px;
  height: 44px;
  color: white;
  display: flex;
  align-items: center;
  /* padding: 10px 12px; */
`;

export const PokedexHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const PokedexGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;

export const PokemonCard = styled.div`
  display: flex;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

export const PokemonImageContainer = styled.div`
  padding: 0px 5px;
`;

export const PokemonImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 0px;
  flex: 1;
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardTopH3 = styled.h3`
  text-transform: capitalize;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonType = styled.div`
    display: flex;
`

export const PokemonHeartBtn = styled.button`
  border:none;
  background-color: white;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  padding: 4px;
  cursor: pointer;
  align-items: center;
`

export const NotFoundText = styled.div`
  text-align: center;
  font-size: 1.25em;
  padding:20px;
`