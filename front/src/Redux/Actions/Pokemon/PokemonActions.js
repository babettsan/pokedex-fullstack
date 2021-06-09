import { 
    POKEMON_ERROR,
    GET_ALL_POKEMONS,
    GET_POKEMON_BY_ID
} from './PokemonActionTypes'

import axios from 'axios'

const getPokemonsAPI = async () => {
    try {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
        const promises = poke.data.results.map((it) => axios.get(it.url))
        const pokemons = await Promise.all(promises).then(values => {
            return values.map((pk) => (
                {
                    id: pk.data.id,
                    name: pk.data.name,
                    image: pk.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
                    types: pk.data.types.map((t) => {
                        return {
                            id: t.type.url.split('/')[6],
                            name: t.type.name
                        }
                    })
                }
            ))
        })
        return pokemons
    } catch (e) {
        console.log('Error', e.message)
    }
}

export const getAllPokemons = () => {
    return async (dispatch) => {
        dispatch(
            {
                type: GET_ALL_POKEMONS,
                payload: await getPokemonsAPI()
            }
        )
    }    
}

export const getPokemonById = (id) => {
    return async (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                const pokemon = response.data
                dispatch(
                    {
                        type: GET_POKEMON_BY_ID,
                        payload: pokemon
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