import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import pokemonReducer from '../Reducers/PokemonReducer'
import stylesReducer from '../Reducers/StylesReducer'

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    themes: stylesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store