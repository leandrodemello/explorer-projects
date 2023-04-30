import styled from 'styled-components';

export const Container = styled.div`

.page {
   min-width: 445px;
   display: flex;
   flex-direction: column;
   align-items: center; 
}

.cal-bec {
   > h1 {
      text-align: end;
      margin-top: 40px;
      font-size: 50px;
      font-weight: 600;
      
      width: 300px;
      border-bottom-style: solid;
      border-bottom-width: 3px;
      border-color: #1eebde;
      transition: 1s;
      
   }

   > p {
      > a {
         color: #af7ce3;
      }
   }


   span {
      font-size: 80px;
   }
   
   > p {
      text-align: center;
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 20px
      
   }
   
}

.last-proj ul li {
   display: flex;
   list-style: none;
   margin-top: 10px;

   border-bottom-style: solid;
   border-bottom-width: 2px;
   border-color: #1eebde;
   
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
         color: #af7ce3;
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