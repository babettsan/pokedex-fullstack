import React, { useEffect, useState } from 'react'
import HomeCards from '../Components/HomeCards'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons } from '../Redux/Actions/Pokemon/PokemonActions'

import ClickSound from '../Sounds/Click.mp3'
import { Howl } from 'howler'
import styled from 'styled-components'

const NumbersContainer = styled.ul`
    align-self: center;
    color: black;
    display: flex;
    list-style: none;
    padding: 0;
    margin-top: -2em;
    @media (max-width: 900px) {
        margin-top: 0;
    }
    
`
const PageNumbers = styled.li`
    color: var(--font-color);
    cursor: pointer;
    font-size: 1.2em;
    font-weight: 500;
    text-align: center;
    padding: 1.6em;
    border-radius: 50%;
    transition: all .3s linear;
    &:hover {
        color: #ff1744;
        transform: scale(1.15);
    }
    &.active {
        background-color: #ff1744;
        color: #000000;
    }
    &.glass {
        &.active {
            background-color: rgba( 255, 255, 255, 0.25 );
            backdrop-filter: blur( .4em );
            -webkit-backdrop-filter: blur( .4em );
        }
    }
    @media (max-width: 900px) {
        display: none;
    }
`
const Button = styled.button`
    font-family: 'Press Start 2P';
    font-size: 1.2em;
    text-align: center;
    padding: 1.6em;
    background-color: transparent;
    border: none;
    color: var(--font-color);
    cursor: pointer;
    transition: all .3s linear;
    &.glass {
        &:hover {
            background: rgba( 255, 255, 255, 0.25 );
            backdrop-filter: blur( .4em );
            -webkit-backdrop-filter: blur( .4em );
        }
    }
    &:hover {
        background: #ff1744;
        color: #000000;
    }
    &:focus {
        outline: none;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 78vw;
    h2 {
        text-align: center;
    }
    @media (max-width: 900px) {
        flex-direction: column;
        width: 100vw;
    }
`
const LoadingImg = styled.img`
    margin-top: 4em;
    height: 40em;
    width: 40em;
    border-radius: 50%;
    align-self: center;
`
const UpButtonContainer = styled.div`
    background: #ff1744;
    border-radius: 50%;
    align-self: center;
    padding: -6em;
    visibility: hidden;
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
    &.glass {
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur( .4em );
        -webkit-backdrop-filter: blur( .4em );
    }
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 900px) {
        visibility: visible;
        padding: 1em;
    }
`
const UpButton = styled.img`
    height: 2.5em;
    width: 2.5em;
    object-fit: contain;
`

const HomeContent = () => {

    const pokemons = useSelector(state => state.pokemon.pokemons)

    const loading = useSelector(state => state.pokemon.loading)

    const style = useSelector(state => state.themes.style)

    const dispatch = useDispatch()

    useEffect(() => {
        if (pokemons.length > 0) return
        dispatch(getAllPokemons(151, 0))
    }, [dispatch, pokemons])

    const clickSound = new Howl({
        src: [ClickSound],
        volume: 0.15
      })

    // ******************** Paginado ********************

    // P??gina actual, inicializada en 1
    const [currentPage, setCurrentPage] = useState(1)
    // Cards o Items que voy a mostrar por p??gina
    const [itemsPerPage] = useState(12)
    // N??mero de p??ginas que quiero mostrar
    const [pageNumberLimit] = useState(5)
    // M??ximo de p??ginas
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    // M??nimo de p??ginas
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    // En cada p??gina voy a insertar las cards
    const pages = [];
    for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
        pages.push(i)
    }

    // Informaci??n de los items que voy a mostrar en cada p??gina
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem)

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }
    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    // const handleMoreBtn = () => {
    //     setItemsPerPage(itemsPerPage + 8)
    // }

    let pageIncrementBtn = null
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <Button className={(style === 'glass') ? 'glass' : ''} onClick={handleNextBtn}>&hellip;</Button>
    }

    let pageDecrementBtn = null
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <Button className={(style === 'glass') ? 'glass' : ''} onClick={handlePrevBtn}>&hellip;</Button>
    }

    // Renderizamos los n??meros de las p??ginas como (<Li>)
    const renderPageNumbers = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            const active = currentPage === number ? 'active' : null
            const glass = (style === 'glass') ? 'glass' : ''
            return (
                <PageNumbers
                    className={`${active} ${glass}`} key={number} id={number} onClick={handleClick}>
                    {number}
                </PageNumbers>
            )
        } else {
            return null;
        }
    })

    // ******************** Paginado ********************

    if (loading) {
        return(
            <Content key='home-content'>
                <LoadingImg src='https://i.imgur.com/hN8NZYh.gif'/>                
            </Content>
        )
    } else {
        return (
            <>
            <Container>
                <Content key='home-content'>
                    {currentItems.map(pokemon => (
                        <HomeCards pokemon={pokemon} key={pokemon.id}/>
                    ))}
                </Content>
            </Container>
            
            <UpButtonContainer className={(style === 'glass') ? 'glass' : ''} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <UpButton src='https://api.iconify.design/ant-design:caret-up-filled.svg'/>
            </UpButtonContainer>

            <NumbersContainer className={(style === 'glass') ? 'glass' : ''} onClick={() => clickSound.play()}>
                <Button className={(style === 'glass') ? 'glass' : ''} onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>Prev</Button>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <Button className={(style === 'glass') ? 'glass' : ''} onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>Next</Button>
            </NumbersContainer>

            </>
        )
    }

}

export default HomeContent
