import React from 'react'
import Swal from 'sweetalert2'

import { useDispatch } from 'react-redux'
import { catchPokemon } from '../Redux/Actions/Pokemon/PokemonActions'

import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 2em;
    width: 80em;
    height: 40em;
    padding: 2em;
    margin: 2em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: .3s;
    &.normal {
        /* background:#A8A77A; */
        background: rgb(168,167,122);
        background: radial-gradient(circle, rgba(168,167,122,1) 0%, rgba(168,167,122,1) 35%, rgba(140,139,105,1) 100%);
    }
    &.fire {
        /* background:#EE8130; */
        background: rgb(238,129,48);
        background: radial-gradient(circle, rgba(238,129,48,1) 0%, rgba(238,129,48,1) 35%, rgba(255,90,0,1) 100%);
    }
    &.water {
        /* background:#6390F0; */
        background: rgb(99,144,240);
        background: radial-gradient(circle, rgba(99,144,240,1) 0%, rgba(99,144,240,1) 35%, rgba(35,105,255,1) 100%);
    }
    &.electric {
        /* background:#F7D02C; */
        background: rgb(247,208,44);
        background: radial-gradient(circle, rgba(247,208,44,1) 0%, rgba(247,208,44,1) 35%, rgba(230,156,36,1) 100%);
    }
    &.grass {
        /* background:#7AC74C; */
        background: rgb(122,199,76);
        background: radial-gradient(circle, rgba(122,199,76,1) 0%, rgba(122,199,76,1) 35%, rgba(81,186,18,1) 100%);
    }
    &.ice {        
        /* background:#96D9D6; */
        background: rgb(179,236,233);
        background: radial-gradient(circle, rgba(179,236,233,1) 0%, rgba(150,217,214,1) 35%, rgba(86,219,213,1) 100%);
    }
    &.fighting {
        /* background:#C22E28; */
        background: rgb(194,46,40);
        background: radial-gradient(circle, rgba(194,46,40,1) 0%, rgba(194,46,40,1) 35%, rgba(187,24,17,1) 100%);
    }
    &.poison {
        /* background:#A33EA1; */
        background: rgb(156,66,154);
        background: radial-gradient(circle, rgba(156,66,154,1) 0%, rgba(163,62,161,1) 35%, rgba(160,26,143,1) 100%);
    }
    &.ground {
        /* background:#E2BF65; */
        background: rgb(226,191,101);
        background: radial-gradient(circle, rgba(226,191,101,1) 0%, rgba(226,191,101,1) 35%, rgba(196,160,87,1) 100%);
    }
    &.flying {
        background:#A98FF3;
    }
    &.psychic {
        /* background:#F95587; */
        background: rgb(249,85,135);
        background: radial-gradient(circle, rgba(249,85,135,1) 0%, rgba(249,85,135,1) 35%, rgba(228,58,110,1) 100%);
    }
    &.bug {
        /* background:#A6B91A; */
        background: rgb(191,213,26);
        background: radial-gradient(circle, rgba(191,213,26,1) 0%, rgba(166,185,26,1) 35%, rgba(98,185,26,1) 100%);
    }
    &.rock {
        /* background:#B6A136; */
        background: rgb(182,161,54);
        background: radial-gradient(circle, rgba(182,161,54,1) 0%, rgba(182,161,54,1) 35%, rgba(163,144,45,1) 100%);
    }
    &.ghost {
        /* background:#735797; */
        background: rgb(115,87,151);
        background: radial-gradient(circle, rgba(115,87,151,1) 0%, rgba(115,87,151,1) 35%, rgba(107,41,142,1) 100%);
    }
    &.dragon {
        /* background:#6F35FC; */
        background: rgb(118,61,255);
        background: radial-gradient(circle, rgba(118,61,255,1) 0%, rgba(111,53,252,1) 35%, rgba(74,0,255,1) 100%);
    }
    &.dark {
        /* background:#705746; */
        background: rgb(112,87,70);
        background: radial-gradient(circle, rgba(112,87,70,1) 0%, rgba(112,87,70,1) 35%, rgba(79,62,50,1) 100%);
    }
    &.steel {
        /* background:#B7B7CE; */
        background: rgb(183,183,206);
        background: radial-gradient(circle, rgba(183,183,206,1) 0%, rgba(183,183,206,1) 35%, rgba(103,103,103,1) 100%);
    } 
    &.fairy {
        /* background:#D685AD; */
        background: rgb(214,133,173);
        background: radial-gradient(circle, rgba(214,133,173,1) 0%, rgba(214,133,173,1) 35%, rgba(210,97,153,1) 100%);
    }
`
const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    margin: 2em 0 2em 0;
`
const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Pic = styled.img`
    object-fit: contain;
    height: 8em;
    width: 8em;
`
const Title = styled.p`
    color: black;
    font-size: 1.2em;
    border: .1em solid black;
    border-radius: 2em;
    padding: 1em 2em 1em 2em;
    text-transform: uppercase;
`
const Caption = styled.p`
    display: flex;
    align-items: center;
    margin: 2em 0 2em 0;
    text-transform: capitalize;
`
const Icon = styled.img`
    height: 2em;
    width: 2em;
    margin-right: 1em;
    padding: .5em;
    border-radius: 50%;
    background: white;
`
const CatchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    margin-top: -2.3em;
    transition: .3s;
    @keyframes move-to-the-side {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(1em);
        }
        100% {
            transform: translateX(0);
        }
    }
    &:hover {
        animation: move-to-the-side 750ms infinite;
        cursor: pointer;
        p {
            visibility: visible;
            text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
        }
    }
`
const CatchText = styled.p`
    visibility: hidden;
    font-size: 1.4em;
`
const Pokeball = styled.img`
    width: 8em;
    height: 8em;
    align-self: center;
`

const DetailCard = ({ pokemon }) => {

    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(catchPokemon(id))
        Swal.fire({
            title: `Gotta catch 'em all!`,
            text: `This Pokemon will appear in TEAM Section!`,
            imageUrl: 'https://i.imgur.com/hY4kEI1.gif',
            imageAlt: 'pokeball',
            width: 500
        })
    }

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
        {pokemon?.map((pokemon) => (
            <Card key={pokemon.id} className={selectType(pokemon.types[0])}>
                <Title>#{pokemon.id} {pokemon.name} - {pokemon.types[0].name} Type</Title>
                <ImgContainer>
                    <div>
                        <Pic src={pokemon.image} alt={pokemon.name} />
                    </div>
                    <div>
                        <Pic src={pokemon.imageBack} alt={pokemon.name} />
                    </div>
                </ImgContainer>
                <DataContainer>
                <div>
                    <Caption><Icon src='https://api.iconify.design/pixelarticons:human-height-alt.svg'/>Height {pokemon.height}</Caption>
                    <Caption><Icon src='https://api.iconify.design/fa-solid:weight-hanging.svg'/>Weight {pokemon.weight}</Caption>
                    <Caption><Icon src='https://api.iconify.design/ant-design:star-filled.svg'/>Skills</Caption>
                </div>
                <div>
                    <Caption><Icon src='https://api.iconify.design/clarity:heart-solid.svg'/>HP_ {pokemon.hp}</Caption>
                    <Caption><Icon src='https://api.iconify.design/jam:sword-f.svg'/>ATK {pokemon.attack}</Caption>
                    <Caption><Icon src='https://api.iconify.design/bx:bxs-shield-alt-2.svg'/>DEF {pokemon.defense}</Caption>  
                    <Caption><Icon src='https://api.iconify.design/ri:speed-fill.svg'/>SPD {pokemon.speed}</Caption>              
                </div>
                </DataContainer>

                <CatchContainer onClick={() => handleClick(pokemon.id)}>
                    <CatchText>Catch</CatchText>
                    <Pokeball src='https://i.imgur.com/q5o0NkA.png'/>
                    <CatchText>Now!!</CatchText>
                </CatchContainer>

            </Card>
        ))}
        </>
    )
}

export default DetailCard
