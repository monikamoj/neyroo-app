import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const RightNav = ({ open }) => {
  return (
    <div>
      <Ul open={open}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/configurator">
            <a>Configurator</a>
          </Link>
        </li>
        <li>
          <Link href="/offer">
            <a>Übersicht</a>
          </Link>
        </li>
        <li>
          <Link href="/export">
            <a>Export</a>
          </Link>
        </li>
      </Ul>
    </div>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: #ff7b00;

  li {
    padding: 10px;
    padding-left: 10px;
  }

  a {
    color: #ff7b00;
    text-decoration: none;
    list-style-type: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 145px;
    padding-top: 0.5rem;
    padding-left: 1rem;
    transition: transform 0.4s ease-in-out;

    li {
      color: #fff;
    }
  }
`;
