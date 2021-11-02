import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /** {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }*/

  body{
    background-image: url("./images/App Titel clean.001.png");
    margin-left: 1rem;
    margin-right: 1rem;
    
  }
  .logo {
  height: 10em;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 2rem;

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
.reactplayer {
  display: flex;
  margin: auto;
}

`;
