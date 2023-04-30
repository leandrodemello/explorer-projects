import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
  
  :root {
    font-size: 65%;
    
  }

  body {
    font-family: 'Akshar', sans-serif;
    text-decoration: none;
    color: #e1ebf1;
    background: #282A36;

 }

 a {
      text-decoration: none;
      color: currentColor;
      font-weight: 600;

   }
  
`;