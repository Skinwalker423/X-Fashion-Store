import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  padding: 20px 40px;
  font-family: 'Open Sans Condensed', sans-serif;

  @media screen and (max-width: 800px){
    padding: 10px;
  }
}

* {
  box-sizing: border-box;
}

a{
  text-decoration: none;
  color: black;
}
`