import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --main-color: #CE1131;
        --secondary-color: #BD0F34;
        --font-color: ${props => props.theme.fontColor};
        --background-simple: ${props => props.theme.backgroundSimple}
    }
    html {
        font-size: 10px !important;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-size: 10px !important;
        font-family: 'Press Start 2P', cursive, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;

        transition: .25s;
        background-color: ${props => props.theme.body};
        background-image: ${props => props.theme.backgroundImage};

        /* Scroll Bar */
        /* width */
        ::-webkit-scrollbar {
            display: none;
            width: 1em;
        }
        /* Track */
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #ce111e;
        }

        @media (max-width: 900px) {
            background-repeat: no-repeat;
            background-attachment: fixed;
        }


    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    ol, ul {
        list-style              : none;
    }
`;

export const lightTheme = {
    body: '#FFFFFF',
    fontColor: '#000000',
    backgroundSimple: '#FFFFFF',
    backgroundImage: `url('https://i.imgur.com/rO0vJiE.png')`
}
export const darkTheme = {
    body: '#202020',
    fontColor: '#FFFFFF',
    backgroundSimple: '#202020',
    backgroundImage: `url('https://i.imgur.com/E30sebh.png')`
}
export const bitsTheme = {
    blur: 'blur(0)',
}
export const glassTheme = {
    blur: 'blur(0.5em)',
}

export default GlobalStyle;
