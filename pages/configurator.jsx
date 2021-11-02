import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { NavBar } from "../src/components/Nav/NavBar";

const Configurator = () => {
  return (
    <>
      <Head>
        <title>Configurator</title>
      </Head>
      <div className="logo">
        <span>
          <Image
            src="/images/NEYROO-Signatur-Weiß.png"
            alt="Neyroo Logo"
            width={175}
            height={45}
          />
        </span>
        <NavBar />
        <h2>Corporate Campus Configurator</h2>
      </div>
    </>
  );
};

const StyledImage = styled(Image)`
  margin-left: 0%;
`;

export default Configurator;
