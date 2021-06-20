import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";

import { Wheel } from "react-custom-roulette";
import { useDispatch, useSelector } from "react-redux";
import { catchRoulette, getAllPokemons } from '../Redux/Actions/Pokemon/PokemonActions'

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
  justify-content: center;
  flex-direction: row;
  margin-top: 4em;
  width: 100vw;
`;
const ButtonContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`
const Try = styled.button`
  margin: 0 0 1em 0;
  height: 30em;
  width: 4em;
`
// const Catch = styled.button`
//   height: 5em;
//   width: 4em;
// `
// Catch Button
const CatchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
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
    color: black !important;
`
const Pokeball = styled.img`
    width: 8em;
    height: 8em;
    align-self: center;
`
// Catch Button

const Roulette = () => {

  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemon.pokemons)
  const [mustSpin, setMustSpin] = useState()

  useEffect(() => {
    if (pokemons.length > 0) return
    dispatch(getAllPokemons(151, 0))
  }, [dispatch, pokemons])

  var data = [];

  const handleClick = () => {
    Swal.fire({
      title: `${data[10].option}`,
      text: `Fate has given you this pokemon, do you want to accept it and read what fate has in store for you?`,
      imageUrl: `${data[10].image}`,
      imageAlt: 'pokeball',
        width: 400,
        position: 'center',
    })
    dispatch(catchRoulette(data[10].id))
    setMustSpin(false)
  }
  
  if (pokemons.length === 0) {
    return (
      <>
      <NavBar/>
      <Content>
        <LoadingImg src='https://i.imgur.com/hN8NZYh.gif'/>                
      </Content>
      </>
    )
  } else {
    for (let p =0; p<30; p++) {
      let a = Math.floor(Math.random() * (150 - 1)) + 1;
      data.push({option:pokemons[a].name, id: pokemons[a].id, image: pokemons[a].image});
    }
    return (
      <>
        <NavBar/>
        <Content>
          <div>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={10}
              data={data}
              backgroundColors={[
                  "#CE1131",
                  "#CE1131"
              ]}
              textColors={["#ffffff"]}
              />
          </div>
          <ButtonContainer>
            <Try onClick={()=> setMustSpin(true)}> Try </Try>
            <CatchContainer onClick={()=> handleClick()}>
                      <CatchText>Catch</CatchText>
                      <Pokeball src='https://i.imgur.com/q5o0NkA.png'/>
                      <CatchText>Now!!</CatchText>
            </CatchContainer>
          </ButtonContainer>
        </Content>
      </>
    );
  }
};

export default Roulette;
