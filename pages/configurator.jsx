import Head from "next/head";
import { LogoImage } from "../src/components/Header/Logo";
import { NavBar } from "../src/components/Nav/NavBar";
import styled from "styled-components";
import ItemCart from "../src/components/Shopping/ItemCart";

const Products = () => {
  return (
    <>
      <Head>
        <title>Configurator</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h2>Corporate Campus Configurator</h2>
      <h3>All Modules</h3>
      <ItemCart />
    </>
  );
};

export default Products;



const StyledArea = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: var(--color-text-normal);
`;
