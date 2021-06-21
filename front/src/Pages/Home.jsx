import React from 'react'
import NavBar from '../Components/NavBar'
import HomeAside from '../Components/HomeAside'
import HomeContent from '../Components/HomeContent'

import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Divider = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`
const Caption = styled.p`
  color: var(--font-color);
  text-align: center;
  font-size: 1.4em;
  border-radius: 1em;
  border: .2em solid var(--font-color);
  width: 50%;
  align-self: center;
  padding: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &.glass {
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( .4em );
    -webkit-backdrop-filter: blur( .4em );
    border: .2em solid transparent;
  }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
`

const Home = () => {

    const style = useSelector(state => state.themes.style)

    return (
        <div>
            <NavBar/>
            
            <Divider>
                <HomeAside key='home-aside'/>
                <Content>
                    <Caption className={(style === 'glass') ? 'glass' : ''}>Some wild Pokemon have appeared!</Caption>
                    <HomeContent key='home-content'/>
                </Content>
            </Divider>
            
        </div>
    )
}

export default Home
