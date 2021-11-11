import React, { useState } from "react";
import data from "../../../data/products.json";
import styled from "styled-components";
import Image from "next/dist/client/image";

export const ShoppingCart = (props) => {
  return data
    .filter(({ id }) => props.shoppingCart.includes(id))
    .map(({ id, name }) => (
      <StyledCart key={id}>
        <h4>{name}</h4>
      </StyledCart>
    ));
};

export default ShoppingCart;

const StyledImage = styled(Image)`
  display: grid;
  justify-items: end;
`;

const StyledCart = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: var(--color-text-normal);
`;
