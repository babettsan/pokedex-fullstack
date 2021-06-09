import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import HomeAside from '../Components/HomeAside'

import { useDispatch, useSelector } from 'react-redux'
import { getPokemonById } from '../Redux/Actions/Pokemon/PokemonActions'

import styled from 'styled-components'

const Divider = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Details = ({ match }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonById(match.params.id))
    }, [dispatch, match])

    const pokemon = useSelector(state => state.pokemon.pokemon)
    console.log(pokemon)

    return (
        <div>
            <NavBar/>
            <Divider>
                <HomeAside/>
                <h2>Pokemon Details</h2>            
            </Divider>
        </div>
    )
}

export default Details
