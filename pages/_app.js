import { GlobalStyle } from "../public/GlobalStyles";
import { Component } from "react";
import { useState } from "react";
import { useLocalStorageState } from "../utils/localstorage";

function MyApp({ Component, pageProps }) {
  const [shoppingCart, setShoppingCart] = useLocalStorageState(
    "shoppingCart",
    []
  );

  const [selectOption, setSelectOption] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
      />
    </>
  );
}

export default MyApp;
