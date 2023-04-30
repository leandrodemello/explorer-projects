import styled from 'styled-components';

export const Container = styled.div`
min-width: 445px;
.page {
   padding: 20px;
}

.intro {
   display: grid;
   justify-content: center;
   justify-items: center;

   padding: 20px;

   > h1 {
      font-size: 16px;
      margin-top: 80px;

      border-bottom-style: solid;
      border-bottom-width: 2px;
      border-color: #1eebde;

      span {
      font-size: 20px;
      }
   }

   > p {
      font-size: 16px;
      margin: 20px;
   }

   > img {
      height: 300px;
      width: 400px;

      border-radius: 6px;
      transition: 1s;
   }

   button {
      height: 30px;
      width: 115px;
      margin-top: 10px;

      color: black;
      font-weight: 700;

      
      border: none;
      border-radius: 5px;
      background-color: #1eebde;
      cursor: pointer;
   }

}

.return {
   font-size: 14px;

   width: 58px;
   border-bottom-style: solid;
   border-bottom-width: 1px;
   border-color: #1eebde;
}

@media (min-width: 800px) {

.intro {
   > img {
      height: 420px;
      width: 800px;
      transition: 1s;
   }
}

}

`;