import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {BASE_URL} from '../components/constants/BASE_URL'
import GlobalStateContext from './GlobalStateContext';
 
const GlobalState = (props) => {
    const [pokemonName, setPokemonName] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])
    console.log(pokemon)
    
    useEffect(() => {
        getPokemonNames()
    } , [])

    useEffect(() => {
        getPokemonDetails()
    } , [pokemonName])

    const getPokemonDetails = () =>{
        const newList = []
        pokemonName.forEach((pokemon)=>{
            axios.get(`${BASE_URL}/pokemon/${pokemon.name}`)
            .then((response)=>{
                newList.push(response.data)
                if(newList.length === 20){
                    setPokemon(newList)
                }
            })
            .catch((error)=>{
                alert(error.message)
            })
        })
    }

    const getPokemonNames = () =>{
        axios.get(`${BASE_URL}/pokemon?limit=20`)
        .then((response) =>{
            setPokemonName(response.data.results)
        })
        .catch((error) =>{
            alert(error.message)
        })
    }

    const data = {pokemon, setPokemon, pokedex, setPokedex, getPokemonDetails}

    return(
        <GlobalStateContext.Provider value={data} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState

