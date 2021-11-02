import Head from "next/head";
import { LogoImage } from "../src/components/Header/Logo";
import { NavBar } from "../src/components/Nav/NavBar";

const Export = () => {
  return (
    <>
      <Head>
        <title>Export</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h2>Angebot senden</h2>
    </>
  );
};

export default Export;
