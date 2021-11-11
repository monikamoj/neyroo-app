import { GlobalStyle } from "../public/GlobalStyles";
import { Component } from "react";
import { useState } from "react";

function MyApp({ Component, pageProps }) {

  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
    </>
  );
}

export default MyApp;
