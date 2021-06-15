import React from 'react'
import NavBar from '../Components/NavBar'

import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4em;
    width: 100vw;
`

const Roulette = () => {
    return (
        <div>
            <NavBar/>
            <Content>
                <h1>Roulette Page</h1>
            </Content>
        </div>
    )
}

export default Roulette
