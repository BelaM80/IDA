import { createGlobalStyle } from "styled-components/macro"

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
}

    :root {
     --primary-color: pink;
     --secondary-color: #100E0E;
     --head-font: 'Arial', sans-serif;
     --paragraph-font: 'Arial', sans-serif;
}

html {
    margin: 0;
    font-size: 1.6rem;
    scroll-behavior: smooth;
    width: 100%;
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