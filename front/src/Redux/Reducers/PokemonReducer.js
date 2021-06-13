import {
    LOADING,
    POKEMON_ERROR,
    GET_ALL_POKEMONS,
    GET_POKEMON_BY_ID
} from '../Actions/Pokemon/PokemonActionTypes'

const initialState = {
    loading: false,
    pokemons: [],
    pokemon: {},
    error: ''
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                loading: true
            }
        }
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
                loading: false,
                error: ''
            }
        }
        case GET_POKEMON_BY_ID: {
            return {
                ...state,
                pokemon: state.pokemons.filter(p => p.id === action.payload)
            }
        }
        default: {
            return state
        }
    }
}

export default pokemonReducer