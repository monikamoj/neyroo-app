import { GlobalStyle } from "../public/GlobalStyles";
import { Component } from "react";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SimpleReactLightbox>
        <GlobalStyle />
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </>
  );
}

export default MyApp;
