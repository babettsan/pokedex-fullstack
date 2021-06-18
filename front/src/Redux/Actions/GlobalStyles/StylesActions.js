import {
    LIGHT_MODE,
    DARK_MODE,
    BITS_MODE,
    GLASS_MODE
} from './StylesActionTypes'

export const lightMode = () => {
    return (dispatch) => {
        dispatch(
            {
                type: LIGHT_MODE,
                payload: 'light'
            }
        )
    }
}
export const darkMode = () => {
    return (dispatch) => {
        dispatch(
            {
                type: DARK_MODE,
                payload: 'dark'
            }
        )
    }
}
export const bitsMode = () => {
    return (dispatch) => {
        dispatch(
            {
                type: BITS_MODE,
                payload: 'bits'
            }
        )
    }
}
export const glassMode = () => {
    return (dispatch) => {
        dispatch(
            {
                type: GLASS_MODE,
                payload: 'glass'
            }
        )
    }
}