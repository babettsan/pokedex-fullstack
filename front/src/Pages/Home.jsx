import React from 'react'
import NavBar from '../Components/NavBar'
import HomeAside from '../Components/HomeAside'
import HomeContent from '../Components/HomeContent'

import styled from 'styled-components'

const Divider = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Home = () => {
    console.log('Hola')
    return (
        <div>
            <NavBar/>
            
            <Divider>
                <HomeAside/>
                <HomeContent/>
            </Divider>
            
        </div>
    )
}

export default Home
