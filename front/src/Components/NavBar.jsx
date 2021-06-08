import React from 'react'

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
`

const NavBar = () => {
    return (
        <>
            <Nav>
                <Caption>PokeRoulette</Caption>
                <Caption>Your Team</Caption>
                <Caption>Create Pokemon</Caption>
                <Caption>About Us</Caption>
            </Nav>
        </>
    )
}

export default NavBar
