import {
    LIGHT_MODE,
    DARK_MODE,
    BITS_MODE,
    GLASS_MODE
} from '../Actions/GlobalStyles/StylesActionTypes'

const initialState = {
    theme: 'light',
    style: 'bits'
}

const stylesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIGHT_MODE: {
            return {
                ...state,
                theme: action.payload
            }
        }
        case DARK_MODE: {
            return {
                ...state,
                theme: action.payload
            }
        }
        case BITS_MODE: {
            return {
                ...state,
                style: action.payload
            }
        }
        case GLASS_MODE: {
            return {
                ...state,
                style: action.payload
            }
        }
        default:
            return state
    }
}

export default stylesReducer