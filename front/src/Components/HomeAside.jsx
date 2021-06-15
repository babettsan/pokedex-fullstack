import React from 'react'

import { useDispatch } from 'react-redux'
import { getAllPokemons } from '../Redux/Actions/Pokemon/PokemonActions'

import styled from 'styled-components'

const Aside = styled.aside`
    display: flex;
    padding-top: 8em;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    height: 125vh;
    background: var(--secondary-color);
    border-right: .4em solid black;
`
const Title = styled.p`
    font-size: 1.4em;
    color: var(--font-color);
    text-shadow: 3px 5px 8px black;
`
const Caption = styled.p`
    font-size: 1.4em;
    color: black;
    border-radius: 50%;
    background: white;
    padding: 1.4em 1em 1.4em 1em;
    transition: .2s;
    &:hover {
        cursor: pointer;
        transform: scale(1.20);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
`

const HomeAside = () => {

    const dispatch = useDispatch()

    return (
        <Aside>
            <Title>Generation</Title>
            <Caption onClick={() => dispatch(getAllPokemons(151, 0))}>#1</Caption>
            <Caption onClick={() => dispatch(getAllPokemons(100, 151))}>#2</Caption>
            <Caption onClick={() => dispatch(getAllPokemons(135, 251))}>#3</Caption>
        </Aside>
    )
}

export default HomeAside
