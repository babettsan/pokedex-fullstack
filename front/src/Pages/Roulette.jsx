import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";

import { Wheel } from "react-custom-roulette";
import { useDispatch, useSelector } from "react-redux";
import { catchRoulette, getRoulettePokemons } from '../Redux/Actions/Pokemon/PokemonActions'

import Swal from 'sweetalert2'
import styled from "styled-components";

const LoadingImg = styled.img`
    margin-top: 4em;
    height: 40em;
    width: 40em;
    border-radius: 50%;
    align-self: center;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Caption = styled.p`
  color: var(--font-color);
  font-size: 1.4em;
  border: .2em solid var(--font-color);
  border-radius: 1em;
  padding: 1em;
`
const RouletteContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
`;
const WheelContainer = styled.div`
  background: white;
  border-radius: 50%;
`
const ButtonContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  border: .3em solid var(--font-color);
  border-radius: 4em;
  margin-left: 1em;
`
const Try = styled.img`
  height: 4em;
  width: 4em;
    &:hover {
        cursor: pointer;
    }
    &.roulette {
      @keyframes move-vertical {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(40em);
        }
        100% {
            transform: translateY(0);
        }
    }
    animation: move-vertical 2000ms infinite;
    }
`

const Roulette = () => {

  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemon.roulette)
  const coins = useSelector(state => state.pokemon.coins)
  const loading = useSelector(state => state.pokemon.loading)
  const [active, setActive] = useState(false)
  const [mustSpin, setMustSpin] = useState(false)

  useEffect(() => {
    if (pokemons.length > 0) return
    dispatch(getRoulettePokemons())
  }, [dispatch, pokemons])

  const random = 15

  const handleClick = () => {
    if (coins === 0) {
      Swal.fire({
        title: `What a bad luck...`,
        text: `Get some coins capturing Pokemons!`,
        imageUrl: `https://i.imgur.com/JCXuiqU.gif`,
        imageAlt: 'pokeball',
        width: 400,
        position: 'center',
      })
      return
    }
    setMustSpin(true)
    setActive(true)
    setTimeout(() => {
      setActive(false)
    }, 1900)
    setTimeout(() => {
      Swal.fire({
        title: `${pokemons[random].name}`,
        text: `Fate has given you this pokemon, do you want to accept it and read what fate has in store for you?`,
        imageUrl: pokemons[random].image ? pokemons[random].image : pokemons[random].imageFrontDefault,
        imageAlt: 'pokeball',
        width: 400,
        position: 'center',
      })
      dispatch(catchRoulette(pokemons[random].id))
      setMustSpin(false)
    }, 11000)
    setTimeout(() => {
      dispatch(getRoulettePokemons())
    }, 13000)
  }
  
  if (loading) {
    return (
      <>
      <NavBar/>
      <RouletteContainer>
        <LoadingImg src='https://i.imgur.com/hN8NZYh.gif'/>                
      </RouletteContainer>
      </>
    )
  } else {
    return (
      <>
        <NavBar/>
        <Content>
          <Caption>Test your luck !</Caption>
          <RouletteContainer>
            <WheelContainer>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={random}
                data={pokemons}
                backgroundColors={[
                  "#CE1131",
                  "#CE1131"
                ]}
                textColors={["#ffffff"]}
                />
            </WheelContainer>
            <ButtonContainer>
              <Try className={(active) ? 'roulette' : ''} src='https://i.imgur.com/q5o0NkA.png' onClick={()=> handleClick()}/>
            </ButtonContainer>
          </RouletteContainer>
          <Caption>Coins: {coins}</Caption>
        </Content>
      </>
    );
  }
};

export default Roulette;
