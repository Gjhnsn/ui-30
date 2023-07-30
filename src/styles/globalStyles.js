import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
        color: ${props => props.theme.secondary};

    }

    h2 {
        font-family: 'Notable', sans-serif;
    }

    p {
        color: ${props => props.theme.secondary};
    }

`

export const theme = {
    body: '#1B1B1B',
    secondary: '#EFEEE8'
}