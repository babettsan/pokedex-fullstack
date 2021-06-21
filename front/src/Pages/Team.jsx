import React from 'react'
import NavBar from '../Components/NavBar'
import TeamCard from '../Components/TeamCard'

import { useSelector } from 'react-redux'

import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 4em;
    width: 100%;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`
const Error = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4em;
`
const Image = styled.img`
    height: 25em;
    width: 40em;
    align-self: center;
`
const Message = styled.p`
    color: var(--font-color);
    margin: 4em;
    font-size: 1.4em;
    line-height: 2em;
    border: .2em solid black;
    padding: 4em;
    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &.glass {
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( .4em );
    -webkit-backdrop-filter: blur( .4em );
    border: .2em solid transparent;
  }
`

const Team = () => {

    const pokemonTeam = useSelector(state => state.pokemon.catchPokemon)
    const style = useSelector(state => state.themes.style)

    return (
        <div>
            <NavBar/>
            <Content>
                {(pokemonTeam.length > 0) ? 
                    <TeamCard pokemonTeam={pokemonTeam}/>
                :
                    <Error>
                        <Image src='https://i.imgur.com/Gxquf3w.gif'/>
                        <Message className={(style === 'glass') ? 'glass' : ''}>You need to catch one Pokemon first ! <br/> Catch at least 1 and come back again.</Message>
                    </Error>
                }
            </Content>
        </div>
    )
}

export default Team
