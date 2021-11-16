import Head from "next/head";
import { LogoImage } from "../src/components/Header/Logo";
import { NavBar } from "../src/components/Nav/NavBar";
import Products from "../src/components/Shopping/Products";

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
