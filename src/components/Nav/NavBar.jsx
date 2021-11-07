import React from "react";
import styled from "styled-components";
import { Burger } from "./Burger";

export const NavBar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: right;
`;
