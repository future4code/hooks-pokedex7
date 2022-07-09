import {useContext} from 'react'
import GlobalStateContext from "../../globalState/GlobalStateContext"
import {useNavigate} from 'react-router-dom'
import {ContainerGlobalPokedex, GridContainerPokedex, CardPokedex, SubContainerGlobalPokedex, ButtonPokemonCard} from "../../styles/styles"


const Pokedex = () =>{
    const navigate = useNavigate()
    const {pokedex, getPokemonDetails, poke} = useContext(GlobalStateContext)

    

    const renderPokedex = pokedex.map((pokemon, index)=>{

        const seeDetails = (param) =>{
            navigate(`/pokemon/${param}`)
          }

        return(
            <CardPokedex key={index} >
                <SubContainerGlobalPokedex>
                <p>{pokemon.name}</p>
                <img src={pokemon.img}/>
                </SubContainerGlobalPokedex>
                <button onClick={() =>deletePokemon(index)}>Delete</button>
                <button onClick={() =>seeDetails(pokemon.name)}>See Details</button>
            </CardPokedex>
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
            <ContainerGlobalPokedex>
            <button onClick={()=>navigate('/')}>Home</button>
            <GridContainerPokedex>
            {renderPokedex}
            </GridContainerPokedex>
            </ContainerGlobalPokedex>
           
        </div>
    )
}
export default Pokedex

