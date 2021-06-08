import React from 'react'

import styled from 'styled-components'

const Aside = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30em;
    height: 100vh;
    background: var(--secondary-color);
    border-right: .4em solid black;
`
const Caption = styled.p`
    font-size: 1.4em;
    color: var(--font-color);
`

const HomeAside = () => {
    return (
        <Aside>
            <Caption>Aside</Caption>
        </Aside>
    )
}

export default HomeAside
