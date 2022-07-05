import {useContext} from 'react'
import GlobalStateContext from "../../globalState/GlobalStateContext"
import {useNavigate} from 'react-router-dom'

const Pokedex = () =>{
    const navigate = useNavigate()
    const {pokedex, getPokemonDetails} = useContext(GlobalStateContext)

    const renderPokedex = pokedex.map((pokemon, index)=>{
        return(
            <div key={index} >
                <p>{pokemon.name}</p>
                <img src={pokemon.img}/>
                <button onClick={() =>deletePokemon(index)}>Delete</button>
            </div>
        )
    })

    const deletePokemon = (index) => {
        if(window.confirm('Are you sure you want to delete')){
            pokedex.splice(index, 1)
            getPokemonDetails()
        }
    }

    return (
        <div>
            <button onClick={()=>navigate('/')}>Home</button>
            {renderPokedex}
        </div>
    )
}
export default Pokedex

