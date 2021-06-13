import React from 'react'
import NavBar from '../Components/NavBar'
import HomeAside from '../Components/HomeAside'
import HomeContent from '../Components/HomeContent'

import styled from 'styled-components'

const Divider = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Caption = styled.p`
    padding-top: 1em;
    font-size: 1.6em;
    color: black;
    text-align: center;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
`

const Home = () => {
    return (
        <div>
            <NavBar/>
            
            <Divider>
                <HomeAside key='home-aside'/>
                <Content>
                    <Caption>Some wild Pokemon have appeared!</Caption>
                    <HomeContent key='home-content'/>
                </Content>
            </Divider>
            
        </div>
    )
}

export default Home
