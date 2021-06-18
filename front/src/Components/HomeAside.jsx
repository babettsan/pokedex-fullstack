import React from 'react'
import AsideCard from './AsideCard'
import AsideMenu from './AsideMenu'

import styled from 'styled-components'

const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 1em 0.5em 1em;
    margin: 1em 0 0 1em;
    width: 25em;
    max-width: 25em;
    height: 100%;
    border-radius: 2em;

    background: rgb(189,15,27);
    background: linear-gradient(90deg, rgba(189,15,27,1) 0%, rgba(189,15,27,1) 0%, rgba(189,15,52,1) 100%);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    @media (max-width: 900px) {
        flex-direction: row;
        width: 100%;
        max-width: 100%;
        margin: 0;
        border-radius: 0em;
        padding: 0;
    }
`

const HomeAside = () => {
    return (
        <Aside>
            <AsideCard/>
            <AsideMenu/>
        </Aside>
    )
}

export default HomeAside
