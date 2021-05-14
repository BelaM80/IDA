import { createGlobalStyle } from "styled-components/macro"

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
}

    :root {
     --primary-color: #290058;
     --secondary-color: #D6FF00;
     --head-font: 'Paytone One', sans-serif;
     --paragraph-font: 'Roboto', sans-serif;
}

html {
    margin: 0;
    font-size: 1.6rem;
    scroll-behavior: smooth;
    width: 100%;
}

h1, h2, h3 {
    color: var(--secondary-color);
    font-family: var(--head-font)
}
h2 {
    font-size: 1.2rem;
}

h3 {
    font-size: 0.8rem;
}

p {
    font-size: 0.8rem;
    color: #fff;
    font-family: var(----paragraph-font);
}

body {
    /* background-image: linear-gradient(red, orange, yellow, green, blue, purple); */
    height: 100vh; 
    background-image: linear-gradient(to right, #FF0000, #FFD701, #A2A84F, #02DC20, #003E67, #4F00F1);
    display: flex;
    justify-content: center
}
`;

export default GlobalStyle;