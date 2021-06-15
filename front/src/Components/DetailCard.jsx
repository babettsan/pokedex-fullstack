import React from 'react'

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
const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
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
    margin: 3em 0 3em 0;
    text-transform: capitalize;
`

const DetailCard = ({ pokemon }) => {

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
                        <Caption>Front</Caption>
                        <Pic src={pokemon.image} alt={pokemon.name} />
                    </div>
                    <div>
                        <Caption>Back</Caption>
                        <Pic src={pokemon.imageBack} alt={pokemon.name} />
                    </div>
                </ImgContainer>
                <DataContainer>
                <div>
                    <Caption>Height {pokemon.height}</Caption>
                    <Caption>Weight {pokemon.weight}</Caption>
                </div>
                <div>
                    <Caption>HP  {pokemon.hp}</Caption>
                    <Caption>ATK {pokemon.attack}</Caption>
                    <Caption>DEF {pokemon.defense}</Caption>  
                    <Caption>SPD {pokemon.speed}</Caption>              
                </div>
                </DataContainer>
            </Card>
        ))}
        </>
    )
}

export default DetailCard
