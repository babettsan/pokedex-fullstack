import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { lightMode, darkMode, bitsMode, glassMode } from '../Redux/Actions/GlobalStyles/StylesActions'

import './Toggles.css'

const Toggles = () => {

    const theme = useSelector(state => state.themes.theme)

    const style = useSelector(state => state.themes.style)

    const dispatch = useDispatch()

    const themeToggler = () => {
        theme === 'light' ? dispatch(darkMode()) : dispatch(lightMode())
    }

    const styleToggler = () => {
        style === 'bits' ? dispatch(glassMode()) : dispatch(bitsMode())
    }

    return (
        <>
            <div class="toggle-btn" id="_1st-toggle-btn" onClick={() => themeToggler()}>
                <input type="checkbox"/>
                <span></span>
            </div>
        
            <div class="toggle-btn" id="_2nd-toggle-btn" onClick={() => styleToggler()}>
                <input type="checkbox"/>
                <span></span>
            </div>
        </>
    )
}

export default Toggles
