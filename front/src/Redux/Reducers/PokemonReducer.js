import {
    LOADING,
    POKEMON_ERROR,
    GET_ALL_POKEMONS,
    GET_POKEMONS_BY_TYPE,
    GET_POKEMON_BY_ID,
    CATCH_POKEMON,
    DELETE_POKEMON,
    CATCH_ROULETTE
} from '../Actions/Pokemon/PokemonActionTypes'

const initialState = {
    loading: false,
    pokemons: [],
    pokemon: {},
    catchPokemon: [],
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
        case GET_POKEMONS_BY_TYPE: {
            return {
                ...state,
                pokemons: action.payload,
                loading: false
            }
        }
        case GET_POKEMON_BY_ID: {
            return {
                ...state,
                pokemon: state.pokemons.filter(p => p.id === action.payload)
            }
        }
        case CATCH_POKEMON: {
            return {
                ...state,
                catchPokemon: [...state.catchPokemon, state.pokemon.find(p => p.id === action.payload)]
            }
        }
        case CATCH_ROULETTE: {
            return {
                ...state,
                catchPokemon: [...state.catchPokemon, state.pokemons.find(p => p.id === action.payload)]
            }
        }
        case DELETE_POKEMON: {
            return {
                ...state,
                catchPokemon: state.catchPokemon.filter(p => p.id !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}

export default pokemonReducer