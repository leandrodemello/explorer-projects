import styled from 'styled-components';

export const Container = styled.div`

.page {
   min-width: 445px;
   display: flex;
   flex-direction: column;
   align-items: center; 
}

.cal-bec {
   
   > p {
      > a {
         color: #03FA6E;
      }
   }


   span {
      font-size: 80px;
   }
   
   > p {
      text-align: center;
      font-size: 16px;
      margin-bottom: 10px
      
   }

   > img {
      width: 100%;
      height: 250px;

   }
   
}

.last-proj ul li {
   display: flex;
   list-style: none;
   margin-top: 10px;
   width: 100%;

   border-bottom-style: solid;
   border-bottom-width: 1px;
   border-color: #03FA6E;
   
     > p {
         font-size: 16px;
         margin: 0 9px;
         font-weight: 300;
      }
      
      > span {
         font-size: 10px;
         font-weight: 300;
      }

}

footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 11px;
    margin: auto;
    bottom: 0;
    padding: 10px;
    position: fixed;

   > p {
      > a {
         color: #03FA6E;
      }
      }

}

@media (min-width: 1000px) {

.cal-bec {
   > h1 {
      text-align: center;
      width: 470px;

      margin-top: 90px;

      transition: 1s;

   }
}

}


`;