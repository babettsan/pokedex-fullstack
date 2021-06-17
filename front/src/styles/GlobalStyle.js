import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --font-color: #FFFFFF;
        --main-color: #CE1131;
        --secondary-color: #BD0F34;
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
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    ol, ul {
        list-style              : none;
    }
`;

export default GlobalStyle;
