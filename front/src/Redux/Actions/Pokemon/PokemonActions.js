import { 
    POKEMON_ERROR,
    GET_ALL_POKEMONS
} from './PokemonActionTypes'

import axios from 'axios'

export const getAllPokemons = () => {
    return (dispatch) => {
        dispatch({ type: GET_ALL_POKEMONS })
        axios.get(`http://algunaUrl:3000`)
            .then(response => {
                const pokemons = response.data
                dispatch(
                    {
                        type: GET_ALL_POKEMONS,
                        payload: pokemons
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: POKEMON_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}