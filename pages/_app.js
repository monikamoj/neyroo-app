import { GlobalStyle } from "../public/GlobalStyles";
import { Component } from "react";
import { useState } from "react";
import { useLocalStorageState } from "../utils/localstorage";
import data from "../data/products.json";

export const euroFormatter = new Intl.NumberFormat("de-de", {
  style: "currency",
  currency: "EUR",
});

function MyApp({ Component, pageProps }) {
  const [shoppingCart, setShoppingCart] = useLocalStorageState(
    "shoppingCart",
    []
  );

  const [selectOption, setSelectOption] = useState(null);

  const totalPrice = shoppingCart.reduce((sumPrice, { id, variant }) => {
    const product = data.find((product) => id === product.id);
    return sumPrice + product.variants[variant].price;
  }, 0);

  const totalPriceFormatted = euroFormatter.format(totalPrice);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
        totalPrice={totalPrice}
        totalPriceFormatted={totalPriceFormatted}
      />
    </>
  );
}

export default MyApp;
