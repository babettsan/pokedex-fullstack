import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: .1em solid black;
    border-radius: 2em;
    width: 12em;
    height: 16em;
    padding: 4em;
    margin: 2em;
    transition: .3s;
    &:hover {
        transform: scale(1.10);
    }
    &.normal {
        background:#A8A77A;
    }
    &.fire {
        background:#EE8130;
    }
    &.water {
        background:#6390F0;
    }
    &.electric {
        background:#F7D02C;      
    }
    &.grass {
        background:#7AC74C;
    }
    &.ice {        
        background:#96D9D6;
    }
    &.fighting {
        background:#C22E28;
    }
    &.poison {
        background:#A33EA1;
    }
    &.ground {
        background:#E2BF65;
    }
    &.flying {
        background:#A98FF3;
    }
    &.psychic {
        background:#F95587;
    }
    &.bug {
        background:#A6B91A;
    }
    &.rock {
        background:#B6A136;
    }
    &.ghost {
        background:#735797;
    }
    &.dragon {
        background:#6F35FC;
    }
    &.dark {
        background:#705746;
    }
    &.steel {
        background:#B7B7CE;
    } 
    &.fairy {
        background:#D685AD;
    }
`
const Pic = styled.img`
    object-fit: contain;
    height: 6em;
    width: 6em;
`
const Id = styled.p`
    color: black;
    border: .1em solid black;
    border-radius: 2em;
    padding: .5em 1.5em .5em 1.5em;
`
const Name = styled.p`
    text-transform: capitalize;
`
const Type = styled.p`
    text-transform: capitalize;
`


const HomeCards = ({ pokemon }) => {
    
    const selectType = (type) => {
        switch (type.name) {
            case 'normal': {
                return 'normal'
            }
            case 'fire': {
                return 'fire'
            }
            case 'water': {
                return 'water'
            }
            case 'electric': {
                return 'electric'
            }
            case 'grass': {
                return 'grass'
            }
            case 'ice': {
                return 'ice'
            }
            case 'fighting': {
                return 'fighting'
            }
            case 'poison': {
                return 'poison'
            }            
            case 'ground': {
                return 'ground'
            }
            case 'flying': {
                return 'flying'
            }
            case 'psychic': {
                return 'psychic'
            }
            case 'bug': {
                return 'bug'
            }
            case 'rock': {
                return 'rock'
            }            
            case 'ghost': {
                return 'ghost'
            }
            case 'dragon': {
                return 'dragon'
            }
            case 'dark': {
                return 'dark'
            }       
            case 'steel': {
                return 'steel'
            }
            case 'fairy': {
                return 'fairy'
            }
            default:
                return 'normal'
        }
    }

    return (
        <>
            <Card key={pokemon.id} className={selectType(pokemon.types[0])}>
                <Link to={`/details/${pokemon.id}`}>
                    <Pic src={pokemon.image} alt={pokemon.name}/>
                </Link>
                    <Id>#{pokemon.id}</Id>
                    <Name>{pokemon.name}</Name>
                    <Type>{pokemon.types[0].name}</Type>
            </Card>
        </>
    )
}

export default HomeCards
