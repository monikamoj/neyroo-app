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
      <StyledDiv>
        <h2>Ausgewählte Module</h2>
        <span>Total Price: {total}</span>
      </StyledDiv>
      <div>
        <ShoppingCart
          shoppingCart={props.shoppingCart}
          setShoppingCart={props.setShoppingCart}
          setTotal={setTotal}
        />
      </div>
    </>
  );
};

export default Offer;

const StyledDiv = styled.div`
  display: flex;
  align-content: center;
  color: var(--color-text-normal);
`;
