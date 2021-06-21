import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";

import { Wheel } from "react-custom-roulette";
import { useDispatch, useSelector } from "react-redux";
import { catchRoulette, getRoulettePokemons } from '../Redux/Actions/Pokemon/PokemonActions'

import RouletteSound from '../Sounds/Roulette.mp3'
import ClickSound from '../Sounds/Click.mp3'
import { Howl } from 'howler'
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
const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 1em;
  border: .3em solid var(--font-color);
  padding: 1em;
  margin-left: -5em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  width: 40em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &.glass {
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( .4em );
    -webkit-backdrop-filter: blur( .4em );
    border: .3em solid transparent;
  }
`
const Caption = styled.p`
  color: var(--font-color);
  font-size: 1.4em;
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
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &.glass {
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( .4em );
    -webkit-backdrop-filter: blur( .4em );
  }
`
const TryContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  border: .3em solid var(--font-color);
  border-radius: 4em;
  margin-left: 1em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &.glass {
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( .4em );
    -webkit-backdrop-filter: blur( .4em );
    border: .3em solid transparent;
  }
`
const Try = styled.img`
  height: 4em;
  width: 4em;
  @keyframes static-vertical {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(.5em);
    }
    100% {
        transform: translateY(0);
    }
  }
  animation: static-vertical 1000ms infinite;    

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
const IconContainer = styled.div`
  background: gold;
  border-radius: 50%;
  margin-right: 1em;
`
const Icon = styled.img`
  height: 4em;
  width: 4em;
`

const Roulette = () => {

  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemon.roulette)
  const coins = useSelector(state => state.pokemon.coins)
  const loading = useSelector(state => state.pokemon.loading)
  const style = useSelector(state => state.themes.style)
  const [active, setActive] = useState(false)
  const [mustSpin, setMustSpin] = useState(false)
  const rouletteSound = new Howl({
    src: [RouletteSound],
    volume: 0.30
  })
  const clickSound = new Howl({
    src: [ClickSound],
    volume: 0.30
  })

  useEffect(() => {
    if (pokemons.length > 0) return
    dispatch(getRoulettePokemons())
  }, [dispatch, pokemons])

  const random = 15

  const handleClick = () => {
    clickSound.play()
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
      rouletteSound.play()
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
          <CaptionContainer className={(style === 'glass') ? 'glass' : ''}>
            <Caption>Test your luck !</Caption>
          </CaptionContainer>
          <RouletteContainer>

            <WheelContainer className={(style === 'glass') ? 'glass' : ''}>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={random}
                data={pokemons}
                backgroundColors={[
                  "#CE1131",
                  "black"
                ]}
                textColors={["#ffffff"]}
                outerBorderColor={'black'}
                outerBorderWidth={6}
                innerRadius={10}
                innerBorderColor={'white'}
                innerBorderWidth={5}
                radiusLineColor={'black'}
                radiusLineWidth={5}
                fontSize={18}
                />
            </WheelContainer>

            <TryContainer className={(style === 'glass') ? 'glass' : ''}>
              <Try className={(active) ? 'roulette' : ''} src='https://i.imgur.com/q5o0NkA.png' onClick={()=> handleClick()}/>
            </TryContainer>

          </RouletteContainer>

          <CaptionContainer className={(style === 'glass') ? 'glass' : ''}>
            <IconContainer>
              <Icon src='https://api.iconify.design/la:coins.svg'/>
            </IconContainer>
            <Caption>
              Coins: {coins}          
            </Caption>
          </CaptionContainer>

        </Content>
      </>
    );
  }
};

export default Roulette;
