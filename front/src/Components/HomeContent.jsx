import React, { useEffect } from 'react'
import HomeCards from '../Components/HomeCards'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons } from '../Redux/Actions/Pokemon/PokemonActions'

import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 77vw;
    h2 {
        text-align: center;
    }
`

const HomeContent = () => {

    const pokemons = useSelector(state => state.pokemon.pokemons)

    const loading = useSelector(state => state.pokemon.loading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPokemons(151, 0))
    }, [dispatch])

    if (loading) {
        return(
            <Content key='home-content'>
                <h2>Loading...</h2>
            </Content>
        )
    } else {
        return (
            <Content key='home-content'>
                {pokemons.map(pokemon => (
                    <HomeCards pokemon={pokemon} key={pokemon.id}/>
                ))}
            </Content>
        )
    }

}

export default HomeContent
