import React from 'react'
import { useDispatch } from 'react-redux'
import { getPokemonById } from '../Redux/Actions/Pokemon/PokemonActions'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 2em;
    width: 12em;
    height: 16em;
    padding: 4em;
    margin: 2em;
    transition: .3s;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        
    &:hover {
        transform: scale(1.10);
    }
    &.normal {
        background: rgb(168,167,122);
        background: radial-gradient(circle, rgba(168,167,122,1) 0%, rgba(168,167,122,1) 35%, rgba(140,139,105,1) 100%);
    }
    &.fire {
        background: rgb(238,129,48);
        background: radial-gradient(circle, rgba(238,129,48,1) 0%, rgba(238,129,48,1) 35%, rgba(255,90,0,1) 100%);
    }
    &.water {
        background: rgb(99,144,240);
        background: radial-gradient(circle, rgba(99,144,240,1) 0%, rgba(99,144,240,1) 35%, rgba(35,105,255,1) 100%);
    }
    &.electric {
        background: rgb(247,208,44);
        background: radial-gradient(circle, rgba(247,208,44,1) 0%, rgba(247,208,44,1) 35%, rgba(230,156,36,1) 100%);
    }
    &.grass {
        background: rgb(122,199,76);
        background: radial-gradient(circle, rgba(122,199,76,1) 0%, rgba(122,199,76,1) 35%, rgba(81,186,18,1) 100%);
    }
    &.ice {        
        background: rgb(179,236,233);
        background: radial-gradient(circle, rgba(179,236,233,1) 0%, rgba(150,217,214,1) 35%, rgba(86,219,213,1) 100%);
    }
    &.fighting {
        background: rgb(194,46,40);
        background: radial-gradient(circle, rgba(194,46,40,1) 0%, rgba(194,46,40,1) 35%, rgba(187,24,17,1) 100%);
    }
    &.poison {
        background: rgb(156,66,154);
        background: radial-gradient(circle, rgba(156,66,154,1) 0%, rgba(163,62,161,1) 35%, rgba(160,26,143,1) 100%);
    }
    &.ground {
        background: rgb(218,108,30);
        background: radial-gradient(circle, rgba(218,108,30,1) 0%, rgba(218,112,36,1) 50%, rgba(177,94,33,1) 100%);
    }
    &.flying {
        background: rgb(163,145,255);
        background: radial-gradient(circle, rgba(163,145,255,1) 0%, rgba(134,128,255,1) 50%, rgba(117,110,254,1) 100%);
    }
    &.psychic {
        background: rgb(249,85,135);
        background: radial-gradient(circle, rgba(249,85,135,1) 0%, rgba(249,85,135,1) 35%, rgba(228,58,110,1) 100%);
    }
    &.bug {
        background: rgb(191,213,26);
        background: radial-gradient(circle, rgba(191,213,26,1) 0%, rgba(166,185,26,1) 35%, rgba(98,185,26,1) 100%);
    }
    &.rock {
        background: rgb(168,153,122);
        background: radial-gradient(circle, rgba(168,153,122,1) 0%, rgba(168,153,122,1) 50%, rgba(147,123,70,1) 100%);
    }
    &.ghost {
        background: rgb(115,87,151);
        background: radial-gradient(circle, rgba(115,87,151,1) 0%, rgba(115,87,151,1) 35%, rgba(107,41,142,1) 100%);
    }
    &.dragon {
        background: rgb(118,61,255);
        background: radial-gradient(circle, rgba(118,61,255,1) 0%, rgba(111,53,252,1) 35%, rgba(74,0,255,1) 100%);
    }
    &.dark {
        background: rgb(47,47,47);
        background: radial-gradient(circle, rgba(47,47,47,1) 0%, rgba(24,24,24,1) 50%, rgba(0,0,0,1) 100%);
        p {
            color: white;
        }
    }
    &.steel {
        background: rgb(183,183,206);
        background: radial-gradient(circle, rgba(183,183,206,1) 0%, rgba(183,183,206,1) 35%, rgba(103,103,103,1) 100%);
    } 
    &.fairy {
        background: rgb(214,133,173);
        background: radial-gradient(circle, rgba(214,133,173,1) 0%, rgba(214,133,173,1) 35%, rgba(210,97,153,1) 100%);
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
const TypeImgContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const TypeImg = styled.img`
    height: 3em;
    width: 3em;
    object-fit: contain;
    margin: 1em 1em 0 1em;
    border-radius: 50%;
    /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`

const HomeCards = ({ pokemon }) => {

    const dispatch = useDispatch()
    
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

    const selectTypeImage = (type) => {
        switch (type.name) {
            case 'normal': {
                return 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Pokémon_Normal_Type_Icon.svg'
            }
            case 'fire': {
                return 'https://upload.wikimedia.org/wikipedia/commons/5/56/Pokémon_Fire_Type_Icon.svg'
            }
            case 'water': {
                return 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Pokémon_Water_Type_Icon.svg'
            }
            case 'electric': {
                return 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Pokémon_Electric_Type_Icon.svg'
            }
            case 'grass': {
                return 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pokémon_Grass_Type_Icon.svg'
            }
            case 'ice': {
                return 'https://upload.wikimedia.org/wikipedia/commons/8/88/Pokémon_Ice_Type_Icon.svg'
            }
            case 'fighting': {
                return 'https://upload.wikimedia.org/wikipedia/commons/b/be/Pokémon_Fighting_Type_Icon.svg'
            }
            case 'poison': {
                return 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pokémon_Poison_Type_Icon.svg'
            }            
            case 'ground': {
                return 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Pokémon_Ground_Type_Icon.svg'
            }
            case 'flying': {
                return 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Pokémon_Flying_Type_Icon.svg'
            }
            case 'psychic': {
                return 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Pokémon_Psychic_Type_Icon.svg'
            }
            case 'bug': {
                return 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Pokémon_Bug_Type_Icon.svg'
            }
            case 'rock': {
                return 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pokémon_Rock_Type_Icon.svg'
            }            
            case 'ghost': {
                return 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pokémon_Ghost_Type_Icon.svg'
            }
            case 'dragon': {
                return 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pokémon_Dragon_Type_Icon.svg'
            }
            case 'dark': {
                return 'https://upload.wikimedia.org/wikipedia/commons/0/09/Pokémon_Dark_Type_Icon.svg'
            }       
            case 'steel': {
                return 'https://upload.wikimedia.org/wikipedia/commons/3/38/Pokémon_Steel_Type_Icon.svg'
            }
            case 'fairy': {
                return 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pokémon_Fairy_Type_Icon.svg'
            }
            default:
                return 'normal'
        }
    }

    return (
        <>
            <Link to={`/details/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }} onClick={() => dispatch(getPokemonById(pokemon.id))}>
                <Card key={pokemon.id} className={selectType(pokemon.types[0])}>
                        {pokemon.image || pokemon.imageFrontDefault ? 
                        <Pic src={pokemon.image ? pokemon.image : pokemon.imageFrontDefault} alt={pokemon.name} />
                        :
                        null
                        }
                        <Id>#{pokemon.id}</Id>
                        <Name>{pokemon.name}</Name>
                        <TypeImgContainer>
                            <TypeImg src={selectTypeImage(pokemon.types[0])}/>
                            {pokemon.types[1] ? 
                            <TypeImg src={selectTypeImage(pokemon.types[1])}/>
                            : 
                            null
                            }
                        </TypeImgContainer>
                </Card>
            </Link>
        </>
    )
}

export default HomeCards
