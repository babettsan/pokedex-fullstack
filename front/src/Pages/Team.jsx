import React from 'react'
import NavBar from '../Components/NavBar'
import TeamCard from '../Components/TeamCard'

import { useSelector } from 'react-redux'

import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4em;
    width: 100vw;
`
const Error = styled.div`
    display: flex;
    flex-direction: column;
`
const Image = styled.img`
    height: 25em;
    width: 40em;
    align-self: center;
`
const Message = styled.p`
    margin: 4em;
    font-size: 1.4em;
    line-height: 2em;
    border: .2em solid black;
    padding: 4em;
    border-radius: 1em;
`

const Team = () => {

    const pokemonTeam = useSelector(state => state.pokemon.catchPokemon)

    return (
        <div>
            <NavBar/>
            <Content>
                {(pokemonTeam.length > 2) ? 
                    <TeamCard pokemonTeam={pokemonTeam}/>
                :
                    <Error>
                        <Image src='https://i.imgur.com/Gxquf3w.gif'/>
                        <Message>You need to catch some Pokemon first ! <br/> Catch at least 3 and come back again.</Message>
                    </Error>
                }
            </Content>
        </div>
    )
}

export default Team
