import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  /*=============== SCROLL BAR ===============*/
::-webkit-scrollbar{
  width: .6rem;
  border-radius: .5rem;
  background-color: hsl(228, 8%, 76%);
}

::-webkit-scrollbar-thumb{
  background-color: hsl(228, 8%, 64%);
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb:hover{
  background-color: hsl(228, 8%, 54%);
  
}

`;



export default GlobalStyles;