import Head from "next/head";
import { LogoImage } from "../src/components/Header/Logo";
import { NavBar } from "../src/components/Nav/NavBar";
import ShoppingCart from "../src/components/Shopping/ShoppingCart";
import { useState } from "react";
import styled from "styled-components";

export const Offer = (props) => {
  const [total, setTotal] = useState(0);
  return (
    <>
      <Head>
        <title>Offer</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h2>Ausgewählte Module</h2>
      <StyledDiv>
        <StyledSpan>Gesamt: {total}</StyledSpan>
        <div>
          <ShoppingCart
            shoppingCart={props.shoppingCart}
            setShoppingCart={props.setShoppingCart}
            setTotal={setTotal}
          />
        </div>
      </StyledDiv>
    </>
  );
};

export default Offer;

const StyledDiv = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: var(--color-text-normal);
  display: grid;
  align-items: start;
  grid-gap: 15px;
`;

const StyledSpan = styled.span`
  display: grid;
  justify-items: end;
  font-family: "Montserrat", sans-serif;
  color: var(--color-text-normal);
  font-size: 20px;
`;
