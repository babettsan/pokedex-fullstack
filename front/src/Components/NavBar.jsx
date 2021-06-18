import React from 'react'
import Toggles from './Toggles'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--main-color);
    border-bottom: .2em solid black;
    height: 6em;
`
const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: .3s;
    &:hover {
        cursor: pointer;
        transform: scale(1.10);
        text-shadow: 3px 5px 8px black;
    }
`
const Caption = styled.p`
    font-size: 1.4em;
    color: #FFFFFF;
    margin-left: .5em;
    @media (max-width: 900px) {
        display: none;
    }
`
const Icon = styled.img`
    height: 2.5em;
    width: 2.5em;
    padding: .5em;
    border-radius: 50%;
    background: white;
`

const NavBar = () => {
    return (
        <>
            <Nav>
                <Link to='/home' style={{ textDecoration: 'none'}}>
                    <IconContainer>
                        <Icon src='https://api.iconify.design/ant-design:home-filled.svg'/>
                        <Caption>Home</Caption>
                    </IconContainer>
                </Link>
                <Link to='/team' style={{ textDecoration: 'none'}}>
                    <IconContainer>
                        <Icon src='https://i.imgur.com/q5o0NkA.png'/>
                        <Caption>Your Team</Caption>
                    </IconContainer>
                </Link>
                <Link to='roulette' style={{ textDecoration: 'none'}}>
                    <IconContainer>
                        <Icon src='https://api.iconify.design/ion:dice-sharp.svg'/>
                        <Caption>PokeRoulette</Caption>
                    </IconContainer>
                </Link>
                {/* <Caption>Create Pokemon</Caption> */}
                <Link to='/about' style={{ textDecoration: 'none'}}>
                    <IconContainer>
                        <Icon src='https://api.iconify.design/heroicons-solid:users.svg'/>
                        <Caption>About Us</Caption>
                    </IconContainer>
                </Link>
                <div>
                <Toggles/>
                </div>
            </Nav>
        </>
    )
}

export default NavBar
