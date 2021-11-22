import Head from "next/head";
import { LogoImage } from "../src/components/Header/Logo";
import { NavBar } from "../src/components/Nav/NavBar";
import ContactUs from "../src/components/Form/ContactUs";
import styled from "styled-components";

const Export = (props) => {
  return (
    <>
      <Head>
        <title>Export</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h2>Angebot senden</h2>
      <h3>Bereit für Deine eigene Story?</h3>
      <StyledPar>
        Leite Dein individuell generiertes Campus Paket weiter per Email.
        Alternativ, kannst Du uns natürlich gerne direkt per Mail oder
        telefonisch kontaktieren.
      </StyledPar>
      <ContactUs
        shoppingCart={props.shoppingCart}
        setShoppingCart={props.setShoppingCart}
      />
      <StyledPar>
        Lass uns direkt über dein Angebot sprechen: 0221 650 327-12
      </StyledPar>
    </>
  );
};

export default Export;

const StyledPar = styled.p`
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: whitesmoke;
  font-size: 2vh;
  margin: auto;
  margin-top: 1rem;
`;
