import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&family=Ubuntu&family=Lato&family=Yomogi&family=Poppins&display=swap');
    
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Nunito;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
