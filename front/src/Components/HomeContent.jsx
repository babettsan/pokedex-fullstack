import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons } from '../Redux/Actions/Pokemon/PokemonActions'
import HomeCards from '../Components/HomeCards'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 70vw;
`

const HomeContent = () => {

    const pokemons = useSelector(state => state.pokemon.pokemons)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])

    console.log(pokemons)

    return (
        <Container key='home-content'>
            {pokemons.map(pokemon => (
                <HomeCards pokemon={pokemon} key={pokemon.id}/>
            ))}
        </Container>
    )
}

export default HomeContent
