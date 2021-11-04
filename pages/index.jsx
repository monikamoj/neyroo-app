import styled from "styled-components";
import Head from "next/head";
import { NavBar } from "../src/components/Nav/NavBar";
import { useState } from "react";
import ReactPlayer from "react-player";
import { LogoImage } from "../src/components/Header/Logo";

export const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Head>
        <title>Corporate Campus Configurator</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h1>CORPORATE CAMPUS CONFIGURATOR</h1>

      <StyledVideo>
        <>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=xJL-s9dq7V0"
            width="100%"
            height="180px"
            controls={true}
            playing={isPlaying}
          />
        </>
      </StyledVideo>
      <StyledText>
        Die weltweit effektivste Plattform für virtuellen Vertrieb, Marketing
        und Communication. Ein zentraler digitaler Hub- ohne Medienbruch,
        nachhaltig und immersiv
      </StyledText>
    </>
  );
};

const StyledVideo = styled.section`
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
