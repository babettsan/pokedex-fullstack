import React from 'react'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonById } from '../Redux/Actions/Pokemon/PokemonActions'

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    min-width: 20em;
    background: rgb(173,0,29);
    background: linear-gradient(90deg, rgba(173,0,29,1) 0%, rgba(206,17,49,1) 50%, rgba(173,0,29,1) 100%);
    border-radius: 2em;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    &.glass {
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur( .4em );
        -webkit-backdrop-filter: blur( .4em );
    }
    @media (max-width: 900px) {
        display: none;
    }
`
const Item = styled.div`
    margin: .5em 0 .5em 0;
    border-radius: 1em;
`
// *************** Dots ***************
const DotContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const LittleDotContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const BigDotContainer = styled.div`
    padding: .50em;
    background: white;
    border-radius: 50%;
    margin-left: .5em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
const BlueDot = styled.div`
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,253,255,1) 41%, rgba(0,87,167,1) 100%);
    border-radius: 50%;
    padding: 2em;
`
const YellowDots = styled.div`
    background: rgb(255,241,125);
    background: radial-gradient(circle, rgba(255,241,125,1) 0%, rgba(255,227,0,1) 48%, rgba(96,86,7,1) 100%);
    border-radius: 50%;
    padding: 1em;
    margin: 0 .5em 0 .5em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
const RedDot = styled.div`
    background: rgb(255,213,202);
    background: radial-gradient(circle, rgba(255,213,202,1) 0%, rgba(255,55,0,1) 48%, rgba(255,17,0,1) 100%);
    border-radius: 50%;
    padding: 1em;
    margin: 0 .5em 0 .5em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
// *************** Dots ***************

// *************** Pokemon ***************
const PokemonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    min-width: 12em;
    height: 12em;
    padding: .75em;
    border-radius: 1em;
    background: #474747;
    margin: auto;
    clip-path: polygon(0 0, 100% 0, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0% 80%, 0% 20%);
`
const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    border-radius: 1em;
    padding: .5em;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(172,172,172,1) 86%, rgba(134,134,134,1) 100%);
    clip-path: polygon(0 0, 100% 0, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0% 80%, 0% 20%);
`
const Img = styled.img`
    object-fit: contain;
    height: 6em;
    width: 6em;
    filter: grayscale(100%);
`
// *************** Pokemon ***************

// *************** Control ***************
const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 1em;
`
const ControlLeft = styled.div`
    display: flex;
    justify-content: space-around;
`
const ControlRight = styled.div`
    display: flex;
    justify-content: center;
`
const ControlDetail = styled.div`
    background: rgb(45,45,45);
    background: radial-gradient(circle, rgba(45,45,45,1) 0%, rgba(28,28,28,1) 0%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
    padding: 1em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: .2s;
    &:hover {
        transform: scale(1.20);
        cursor: pointer;
    }
`
const ControlTransparent = styled.div`
    background: transparent;
    padding: 2em;
`
const ControlName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(98,210,44);
    background: radial-gradient(circle, rgba(98,210,44,1) 0%, rgba(64,200,0,1) 86%, rgba(41,116,0,1) 100%);
    border-radius: .5em;
    padding: 0em 1.5em 0em 1.5em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
const ControlSquare = styled.div`
    background: rgb(45,45,45);
    background: radial-gradient(circle, rgba(45,45,45,1) 0%, rgba(28,28,28,1) 0%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
    margin: 1em 2em 1em 2em;
    padding: 1em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: .2s;
    &:hover {
        cursor: pointer;
    }
`
const ControlImg = styled.img`
    height: 2em;
    width: 2em;
`
// *************** Control ***************

const AsideCard = () => {

    const dispatch = useDispatch()

    const style = useSelector(state => state.themes.style)

    const pokemonCatch = useSelector(state => state.pokemon.catchPokemon)

    return (
        <Container className={(style === 'glass' ? 'glass' : '')}>
            <Item>
                <DotContainer>
                    <BigDotContainer>
                        <BlueDot/>
                    </BigDotContainer>
                    <LittleDotContainer>
                        <div>
                        <RedDot/>
                        </div>
                        <div>
                        <YellowDots/>
                        </div>
                        <div>
                        <YellowDots/>
                        </div>
                    </LittleDotContainer>
                </DotContainer>
            </Item>

            <Item>
                <PokemonContainer>
                    <ImgContainer>
                    <Img src={(pokemonCatch.length > 0) ? pokemonCatch[pokemonCatch.length-1].image : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif'}/>
                    </ImgContainer>
                </PokemonContainer>
            </Item>

            <Item>
                <ControlContainer>

                    <ControlLeft>
                        {(pokemonCatch.length > 0) ?
                        <Link to={`/details/${pokemonCatch[pokemonCatch.length - 1].id}`} style={{ textDecoration: 'none', color: 'black' }} onClick={() => dispatch(getPokemonById(pokemonCatch[pokemonCatch.length - 1].id))}>
                            <ControlDetail>
                                <ControlImg src='https://api.iconify.design/entypo:magnifying-glass.svg?color=white'/>
                            </ControlDetail>
                        </Link>
                        :
                        <ControlDetail>
                            <ControlImg src='https://api.iconify.design/entypo:magnifying-glass.svg?color=white'/>
                        </ControlDetail>
                        }
                        <ControlName>
                            <p>Total: {pokemonCatch.length}</p>
                        </ControlName>
                        <ControlTransparent/>
                    </ControlLeft>

                    <ControlRight>
                        <ControlSquare>
                            <ControlImg src='https://api.iconify.design/ant-design:caret-left-filled.svg?color=white'/>
                        </ControlSquare>
                        <ControlSquare>
                            <ControlImg src='https://api.iconify.design/ant-design:caret-right-filled.svg?color=white'/>
                        </ControlSquare>
                    </ControlRight>

                </ControlContainer>
            </Item>
        </Container>
    )
}

export default AsideCard
