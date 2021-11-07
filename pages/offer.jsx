import Head from "next/head";
import { LogoImage } from "../src/components/Header/Logo";
import { NavBar } from "../src/components/Nav/NavBar";

const Offer = () => {
  return (
    <>
      <Head>
        <title>Offer</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h2>Ausgewählte Module</h2>
     
    </>
  );
};

export default Offer;
