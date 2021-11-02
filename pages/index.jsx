import Image from "next/image";
import styled from "styled-components";
import Head from "next/head";
import { NavBar } from "../src/components/Nav/NavBar";
import { useState } from "react";
import ReactPlayer from "react-player";

export const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Head>
        <title>Corporate Campus Configurator</title>
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
        <h1>CORPORATE CAMPUS CONFIGURATOR</h1>
      </div>
      <StyledVideo>
        <ReactPlayer
          className="reactplayer"
          url="https://www.youtube.com/watch?v=xJL-s9dq7V0"
          width="15%"
          height="60px"
          playIcon={<button>Play</button>}
          playing={isPlaying}
        />
      </StyledVideo>
      <StyledText>
        Die weltweit effektivste Plattform für virtuellen Vertrieb, Marketing
        und Communication. Ein zentraler digitaler Hub- ohne Medienbruch,
        nachhaltig und immersiv
      </StyledText>
    </>
  );
};

const StyledImage = styled(Image)`
  margin-left: 0;
`;

const StyledVideo = styled.section`
  position: relative;
  padding-top: 25%;
  margin: auto;
  margin-top: 3rem;
`;

const StyledText = styled.a`
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #ff7b00;
  font-size: 3vh;
  margin-top: 9rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export default Home;
