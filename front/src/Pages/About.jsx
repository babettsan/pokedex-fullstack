import React from 'react'
import NavBar from '../Components/NavBar'

import { useSelector } from 'react-redux'

import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
`
const Title = styled.p`
    color: var(--font-color);
    font-size: 2em;
    padding: 2em;
    text-align: center;
`
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`
const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1em;
    transition: .35s;
    &:hover {
        transform: scale(1.10)
    }
`
const Caption = styled.p`
    color: var(--font-color);
    font-size: 1.4em;
    text-align: center;
`
const Photo = styled.img`
    height: 20em;
    width: 20em;
    border-radius: 50%;
    object-fit: contain;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: .2em solid var(--font-color);
    border-radius: 2em;
    margin: 2em;
    padding: 2em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &.glass {
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur( .4em );
        -webkit-backdrop-filter: blur( .4em );
        border: .2em solid transparent;
    }
`
const Links = styled.div`
    display: flex;
    flex-direction: row;
`
const Icon = styled.img`
    height: 3.5em;
    width: 3.5em;
    margin: 0 .5em;
`

const About = () => {

    const theme = useSelector(state => state.themes.theme)
    const style = useSelector(state => state.themes.style)

    return (
        <div>
            <NavBar/>
            <Content>
                <Title>The Developers</Title>
                <ProfileContainer>
                <Profile>
                    <Photo src='https://i.imgur.com/tiCBFNh.png'/>
                    <InfoContainer className={(style === 'glass') ? 'glass' : ''}>
                        <Caption>Guillermo Bravo</Caption>
                        <Links>
                        <a href='https://www.linkedin.com/in/guillermo-bravo-294499208/' target="blank"><Icon src='https://api.iconify.design/logos:linkedin-icon.svg'/></a>
                        <a href='https://github.com/hollowblind095' target="blank"><Icon src={(theme === 'light') ? 'https://api.iconify.design/akar-icons:github-fill.svg?color=black' : 'https://api.iconify.design/akar-icons:github-fill.svg?color=white'}/></a>
                        <a href='https://portfolio-pied-seven-96.vercel.app' target="blank"><Icon src={(theme === 'light') ? 'https://api.iconify.design/dashicons:portfolio.svg?color=black' : 'https://api.iconify.design/dashicons:portfolio.svg?color=white'}/></a>
                        </Links>
                    </InfoContainer>
                </Profile>
                <Profile>
                    <Photo src='https://i.imgur.com/69rn4sK.png'/>
                    <InfoContainer className={(style === 'glass') ? 'glass' : ''}>
                        <Caption>Barbara Sanchez</Caption>
                        <Links>
                        <a href='https://www.linkedin.com/in/barbara-n-s-624b09116/' target="blank"><Icon src='https://api.iconify.design/logos:linkedin-icon.svg'/></a>
                        <a href='https://github.com/babettsan' target="blank"><Icon src={(theme === 'light') ? 'https://api.iconify.design/akar-icons:github-fill.svg?color=black' : 'https://api.iconify.design/akar-icons:github-fill.svg?color=white'}/></a>
                        <a href='https://babettsan.vercel.app' target="blank"><Icon src={(theme === 'light') ? 'https://api.iconify.design/dashicons:portfolio.svg?color=black' : 'https://api.iconify.design/dashicons:portfolio.svg?color=white'}/></a>
                        </Links>
                    </InfoContainer>
                </Profile>
                </ProfileContainer>
            </Content>
        </div>
    )
}

export default About