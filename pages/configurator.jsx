import Head from "next/head";
import { LogoImage } from "../src/components/Header/Logo";
import { NavBar } from "../src/components/Nav/NavBar";
import styled from "styled-components";
import Products from "../src/components/Shopping/Products";
import ShoppingCart from "../src/components/Shopping/ShoppingCart";

export const Configurator = (props) => {
  return (
    <>
      <Head>
        <title>Configurator</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h2>Corporate Campus Configurator</h2>
      <h3>All Modules</h3>
      <Products
        shoppingCart={props.shoppingCart}
        setShoppingCart={props.setShoppingCart}
      />
      
    </>
  );
};

export default Configurator;

/*const StyledArea = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: var(--color-text-normal);
`;*/
