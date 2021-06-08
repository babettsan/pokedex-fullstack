import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Landing = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url('https://i.imgur.com/iWdJwQU.gif');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    &:hover {
        transform: scale(1.20);
        cursor: pointer;
    }
`
const Title = styled.h2`
    font-size: 2.6em;
    color: white;
    text-shadow: 3px 5px 8px black;
`
const Img = styled.img`
    padding: 4em;
    background-image: url('https://i.imgur.com/q5o0NkA.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`

const LandingPage = () => {
    return (
        <>
            <Landing>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                <Container>
                    <Img/>
                    <Title>Enter</Title>
                </Container>
                </Link>
            </Landing>
        </>
    )
}

export default LandingPage
