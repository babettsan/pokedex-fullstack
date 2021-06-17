import React, { useEffect, useState } from 'react'
import HomeCards from '../Components/HomeCards'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons } from '../Redux/Actions/Pokemon/PokemonActions'

import styled from 'styled-components'

const NumbersContainer = styled.ul`
    align-self: center;
    color: black;
    display: flex;
    list-style: none;
    padding: 0;
`
const PageNumbers = styled.li`
    color: black;
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
        color: black
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
    color: var(--dark-primary);
    cursor: pointer;
    transition: all .3s linear;
    &:hover {
        background: #ff1744;
        color: black;
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
    }
`

const HomeContent = () => {

    const pokemons = useSelector(state => state.pokemon.pokemons)

    const loading = useSelector(state => state.pokemon.loading)

    const dispatch = useDispatch()

    useEffect(() => {
        if (pokemons.length > 0) return
        dispatch(getAllPokemons(151, 0))
    }, [dispatch, pokemons])

    // ******************** Paginado ********************

    // Página actual, inicializada en 1
    const [currentPage, setCurrentPage] = useState(1)
    // Cards o Items que voy a mostrar por página
    const [itemsPerPage] = useState(12)

    // Número de páginas que quiero mostrar
    const [pageNumberLimit] = useState(5)
    // Máximo de páginas
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    // Mínimo de páginas
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    // En cada página voy a insertar las cards
    const pages = [];
    for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
        pages.push(i)
    }

    // Información de los items que voy a mostrar en cada página
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
        pageIncrementBtn = <Button onClick={handleNextBtn}>&hellip;</Button>
    }

    let pageDecrementBtn = null
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <Button onClick={handlePrevBtn}>&hellip;</Button>
    }

    // Renderizamos los números de las páginas como (<Li>)
    const renderPageNumbers = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <PageNumbers
                    className={currentPage === number ? 'active' : null} key={number} id={number} onClick={handleClick}>
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
                <h2>Loading...</h2>
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

            <NumbersContainer>
                <Button onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>Prev</Button>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <Button onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>Next</Button>
            </NumbersContainer>

            </>
        )
    }

}

export default HomeContent
