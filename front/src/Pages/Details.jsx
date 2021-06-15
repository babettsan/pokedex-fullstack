import React from 'react'
import NavBar from '../Components/NavBar'
import HomeAside from '../Components/HomeAside'
import DetailCard from '../Components/DetailCard'

import { useSelector } from 'react-redux'

import styled from 'styled-components'

const Divider = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10em;
    width: 75vw;
`

const Details = () => {

    const pokemon = useSelector(state => state.pokemon.pokemon)
    
    return (
        <div>
            <NavBar/>
            <Divider>
                <HomeAside/>
                <Content>
                    <DetailCard pokemon={pokemon}/>
                </Content>
            </Divider>
        </div>
    )
}

export default Details
