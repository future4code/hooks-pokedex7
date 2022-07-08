import styled from "styled-components";

export const HomeGlobalContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 98vw;
    height: 100vh;
`;

export const HeaderContainer = styled.div `
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  margin-left: 650px;
`;

export const ImgHeader = styled.img `
  width: 300px;
  height: 100px;
`;

export const HomeContainerGrid = styled.div `
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
`;


export const PokemonCard = styled.div `
    display: flex;
    flex-direction: column;
    border: 2px solid purple;
    width: 300px;
    height: 300px;

    /* justify-content: space-between; */
    /* align-items: center; */
    
`;

export const ButtonPokemonCard = styled.button `
border-radius: 5px;
  width: 50%;
  height: 80px;
  justify-content: space-between;
  border: 2px solid purple;
 
  /* margin-bottom: 0px; */
`;

export const ImgPokeCard = styled.img `
  display: inline-block;
  height: 150px;
  width: 150px;
`;

export const ContainerCard = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 75px;
`;


export const PokeNameCard = styled.div `

`;

export const DivButton = styled.div `

`;


