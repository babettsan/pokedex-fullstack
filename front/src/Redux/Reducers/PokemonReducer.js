import {
    POKEMON_ERROR,
    GET_ALL_POKEMONS,
    GET_POKEMON_BY_ID
} from '../Actions/Pokemon/PokemonActionTypes'

const initialState = {
    pokemons: [],
    pokemon: {},
    error: ''
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case POKEMON_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case GET_ALL_POKEMONS: {
            return {
                ...state,
                pokemons: action.payload,
                error: ''
            }
        }
        case GET_POKEMON_BY_ID: {
            return {
                ...state,
                pokemon: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default pokemonReducer