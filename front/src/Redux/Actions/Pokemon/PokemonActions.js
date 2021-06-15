import { 
    // POKEMON_ERROR,
    LOADING,
    GET_ALL_POKEMONS,
    GET_POKEMON_BY_ID,
    CATCH_POKEMON
} from './PokemonActionTypes'

import axios from 'axios'

const getPokemonsAPI = async (max, min) => {
    try {
        console.log('REQUEST getPokemonsAPI')
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${max}&offset=${min}`)
        const promises = poke.data.results.map((it) => axios.get(it.url))
        const pokemons = await Promise.all(promises).then(values => {
            return values.map((pk) => (
                {
                    id: pk.data.id,
                    name: pk.data.name,
                    height: pk.data.height,
                    weight: pk.data.weight,
                    abilities: pk.data.abilities,
                    hp: pk.data.stats[0].base_stat,
                    attack: pk.data.stats[1].base_stat,
                    defense: pk.data.stats[2].base_stat,
                    speed: pk.data.stats[5].base_stat,
                    image: pk.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
                    imageBack: pk.data.sprites.versions["generation-v"]["black-white"].animated.back_default,
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

export const getAllPokemons = (max, min) => {
    return async (dispatch) => {
        dispatch({ type: LOADING })
        dispatch(
            {
                type: GET_ALL_POKEMONS,
                payload: await getPokemonsAPI(max, min)
            }
        )
    }
}

export const getPokemonById = (id) => {
    return (dispatch) => {
        dispatch(
            {
                type: GET_POKEMON_BY_ID,
                payload: parseInt(id)
            }
        )
    }
}

export const catchPokemon = (id) => {
    return (dispatch) => {
        dispatch(
            {
                type: CATCH_POKEMON,
                payload: parseInt(id)
            }
        )
    }
}