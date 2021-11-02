import styled from "styled-components";
import Head from "next/head";
import { NavBar } from "../src/components/Nav/NavBar";
import { useState } from "react";
import ReactPlayer from "react-player";
import Header from "../src/components/Header/Header";
import { LogoImage } from "../src/components/Header/Logo";

export const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <>
      <Head>
        <title>Corporate Campus Configurator</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h1>CORPORATE CAMPUS CONFIGURATOR</h1>
      <StyledVideo>
        <img onClick={toggle} src="/images/player.png" alt="" width="50" />
        {isActive ? (
          <>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=xJL-s9dq7V0"
              width="100%"
              height="150px"
              playing={isPlaying}
            />
            <button onClick={() => setIsPlaying(!isPlaying)}>play/stop </button>{" "}
          </>
        ) : (
          ""
        )}
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
