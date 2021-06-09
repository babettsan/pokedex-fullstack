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
    return (
        <div>
            <NavBar/>
            
            <Divider>
                <HomeAside key='home-aside'/>
                <HomeContent key='home-content'/>
            </Divider>
            
        </div>
    )
}

export default Home
