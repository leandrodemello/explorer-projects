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
    background: rgb(92,62,163);
    background: radial-gradient(circle, rgba(92,62,163,1) 0%, rgba(18,18,21,1) 100%);

 }

 a {
      text-decoration: none;
      color: currentColor;
      font-weight: 600;

   }
  
`;