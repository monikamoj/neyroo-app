import Head from "next/head";
import { LogoImage } from "../src/components/Header/Logo";
import { NavBar } from "../src/components/Nav/NavBar";
import ShoppingCart from "../src/components/Shopping/ShoppingCart";


export const Offer = (props) => {

  return (
    <>
      <Head>
        <title>Offer</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h2>Ausgewählte Module</h2>
      <div>
        <ShoppingCart
          shoppingCart={props.shoppingCart}
          setShoppingCart={props.setShoppingCart}
        />
      </div>
    </>
  );
};

export default Offer;
