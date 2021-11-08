import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /** {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }*/

  :root {
  // background addnew form
  --color-text-normal: whitesmoke; // var(--color-text-normal);
  --color-text-signal: #ED6D10; // var(--color-text-signal);
  --color-button: #ED6D10; // var(--color-button); 
  }

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
  color: var(--color-text-signal);
  font-family: "Montserrat", sans-serif; 
}

h2 {
  margin: auto;
  margin-top: 1rem;
  padding-bottom: 3rem;
  color: var(--color-text-signal);
  font-family: "Montserrat", sans-serif; 
}

h3 {
  margin: auto;
  padding-bottom: 3rem;
  color: var(--color-text-normal);
  font-family: "Montserrat", sans-serif; 
}

img {
  display: flex;
  margin: auto;
  width: 9vh;
}

input[type="text"],
input[type="email"] {
  display: grid;
  grid-column: 3/4;
  margin-top: 1rem;
  font-size: 2vh;
}

form {
  display: grid;
  grid-column: 4;
  grid-row: 4;
  margin-top: 2rem;
}

button {
  margin-top: 4rem;
  margin-bottom: 4rem;
  background-color: var(--color-button);
  color: var(--color-text-normal);
  border-radius: 5px;
  height: 32px;
  width: 120px;
}
`;
