import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    background: var(--main-color);
    border-bottom: .2em solid black;
`
const Caption = styled.p`
    font-size: 1.4em;
    color: var(--font-color);
    transition: .2s;
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
        transform: scale(1.15);
        text-shadow: 3px 5px 8px black;
    }
    @media (max-width: 900px) {
        width: 1em;
        visibility: hidden;
        img {
            visibility: visible
        }
    }
`
const Icon = styled.img`
    height: 1.5em;
    width: 1.5em;
    margin-right: 1em;
    padding: .5em;
    border-radius: 50%;
    background: white;
`

const NavBar = () => {
    return (
        <>
            <Nav>
                <Link to='/home' style={{ textDecoration: 'none'}}>
                    <Caption><Icon src='https://api.iconify.design/ant-design:home-filled.svg'/>Home</Caption>
                </Link>
                <Link to='/team' style={{ textDecoration: 'none'}}>
                    <Caption><Icon src='https://i.imgur.com/q5o0NkA.png'/>Your Team</Caption>
                </Link>
                <Link to='roulette' style={{ textDecoration: 'none'}}>
                    <Caption><Icon src='https://api.iconify.design/ion:dice-sharp.svg'/>PokeRoulette</Caption>
                </Link>
                {/* <Caption>Create Pokemon</Caption> */}
                <Link to='/about' style={{ textDecoration: 'none'}}>
                    <Caption><Icon src='https://api.iconify.design/heroicons-solid:users.svg'/>About Us</Caption>
                </Link>
            </Nav>
        </>
    )
}

export default NavBar
