import React, { useState } from "react";
import data from "../../../data/products.json";
import styled from "styled-components";
import Image from "next/dist/client/image";

const euroFormatter = new Intl.NumberFormat("de-de", {
  style: "currency",
  currency: "EUR",
});

export const ShoppingCart = (props) => {
  return props.shoppingCart.map(({ id, variant }) => {
    const product = data.find((product) => id === product.id);
    return (
      <StyledCart key={id}>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p>
          {euroFormatter.format(product.variants[variant].price)} -{" "}
          {product.variants[variant].duration} Tage
        </p>
      </StyledCart>
    );
  });
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
