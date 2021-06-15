import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    background: var(--main-color);
    border-bottom: .4em solid black;
`
const Caption = styled.p`
    font-size: 1.4em;
    color: var(--font-color);
    transition: .2s;
    &:hover {
        cursor: pointer;
        transform: scale(1.15);
        text-shadow: 3px 5px 8px black;
    }
`

const NavBar = () => {
    return (
        <>
            <Nav>
                <Link to='/home' style={{ textDecoration: 'none'}}>
                    <Caption>Home</Caption>
                </Link>
                <Caption>Your Team</Caption>
                <Caption>PokeRoulette</Caption>
                {/* <Caption>Create Pokemon</Caption> */}
                <Caption>About Us</Caption>
            </Nav>
        </>
    )
}

export default NavBar
