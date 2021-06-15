import React from 'react'
import NavBar from '../Components/NavBar'

import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4em;
    width: 100vw;
`

const About = () => {
    return (
        <div>
            <NavBar/>
            <Content>
                <h1>About Page</h1>
            </Content>
        </div>
    )
}

export default About