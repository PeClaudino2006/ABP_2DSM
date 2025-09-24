import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundImage};
    color: ${({ theme }) => theme.colors.text.base};
    font-family: ${({ theme }) => theme.fonts.body};
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
