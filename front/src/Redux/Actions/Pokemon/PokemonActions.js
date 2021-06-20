import { 
    LOADING,
    GET_ALL_POKEMONS,
    GET_POKEMON_BY_ID,
    CATCH_POKEMON,
    DELETE_POKEMON,
    GET_POKEMONS_BY_TYPE,
    CATCH_ROULETTE,
    GET_ROULETTE_POKEMONS
} from './PokemonActionTypes'

import axios from 'axios'

const getPokemonsAPI = async (max, min) => {
    try {
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
                    imageFrontDefault: pk.data.sprites.front_default,
                    imageBackDefault: pk.data.sprites.back_default,
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

const getPokemonsByTypeAPI = async (type) => {
    try {
        const poke = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
        console.log(`https://pokeapi.co/api/v2/type/${type}`)
        const promises = poke.data.pokemon.map((it) => axios.get(it.pokemon.url))
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
                    imageFrontDefault: pk.data.sprites.other["official-artwork"].front_default,
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

const getPokemonsRouletteAPI = async () => {
    try {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118`)
        const promises = poke.data.results.map((it) => axios.get(it.url))
        const randomPromises = []
        for (let p = 0; p < 30; p++) {
            let a = Math.floor(Math.random() * 1118 ) + 1;
            randomPromises.push(promises[a]);
        }
        const pokemons = await Promise.all(randomPromises).then(values => {
            return values.map((pk) => (
                {
                    option: pk.data.name,
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
                    imageFrontDefault: pk.data.sprites.front_default,
                    imageBackDefault: pk.data.sprites.back_default,
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

export const getPokemonsByType = (type) => {
    return async (dispatch) => {
        dispatch({ type: LOADING })
        dispatch(
            {
                type: GET_POKEMONS_BY_TYPE,
                payload: await getPokemonsByTypeAPI(type)
            }
        )
    }
}

export const getRoulettePokemons = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING })
        dispatch(
            {
                type: GET_ROULETTE_POKEMONS,
                payload: await getPokemonsRouletteAPI()
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

export const catchRoulette = (id) => {
    return (dispatch) => {
        dispatch(
            {
                type: CATCH_ROULETTE,
                payload: parseInt(id)
            }
        )
    }
}

export const deletePokemon = (id) => {
    return (dispatch) => {
        dispatch(
            {
                type: DELETE_POKEMON,
                payload: parseInt(id)
            }
        )
    }
}