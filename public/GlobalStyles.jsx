import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /** {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }*/

  body{
    background-image: url("./images/Campus_Verlauf.png");
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;
    padding-left: 1rem;

    @media (max-width: 768px) {
      background-image: url("./images/Campus_Verlauf_mobile.png");
  
  }

  @media (max-width: 1439px) {
      background-image: url("./images/Campus_Verlauf_big.png");
     
  }
}

h1 {
  margin: auto;
  color: #ED6D10;
  font-family: "Montserrat", sans-serif; 
}

h2 {
  margin: 2rem;
  color: #ED6D10;
  font-family: "Montserrat", sans-serif; 
}

img {
  display: flex;
  margin: auto;
  width: 9vh;
}

`;
