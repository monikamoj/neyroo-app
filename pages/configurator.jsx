import Head from "next/head";
import { LogoImage } from "../src/components/Header/Logo";
import { NavBar } from "../src/components/Nav/NavBar";

const Configurator = () => {
  return (
    <>
      <Head>
        <title>Configurator</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h2>Corporate Campus Configurator</h2>
    </>
  );
};

export default Configurator;
