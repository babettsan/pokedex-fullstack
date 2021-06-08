import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Caption = styled.p`
    font-size: 1.4em;
    color: black;
    /* color: var(--font-color); */
`

const HomeContent = () => {
    return (
        <Container>
            <Caption>Content</Caption>
        </Container>
    )
}

export default HomeContent
