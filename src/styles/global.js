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
    background: rgb(38,137,171);
    background: radial-gradient(circle, rgba(38,137,171,1) 42%, rgba(99,207,157,1) 100%);  

 }

 a {
      text-decoration: none;
      color: currentColor;
      font-weight: 600;

   }
  
`;