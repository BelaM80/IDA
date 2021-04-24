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

`;

export default GlobalStyle;