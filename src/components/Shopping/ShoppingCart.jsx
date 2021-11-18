import React, { useEffect, useState } from "react";
import data from "../../../data/products.json";
import styled from "styled-components";
import Image from "next/dist/client/image";

export const euroFormatter = new Intl.NumberFormat("de-de", {
  style: "currency",
  currency: "EUR",
});

export const ShoppingCart = (props) => {
  const totalPrice = props.shoppingCart.reduce((sumPrice, { id, variant }) => {
    const product = data.find((product) => id === product.id);
    return sumPrice + product.variants[variant].price;
  }, 0);

  useEffect(() => {
    props.setTotal(euroFormatter.format(totalPrice));
  }, [totalPrice]);

  const handleRemoveProduct = (index) => {
    const shoppingCartCopy = [...props.shoppingCart];
    shoppingCartCopy.splice(index, 1);
    props.setShoppingCart(shoppingCartCopy);
  };
  return props.shoppingCart.map(({ id, variant }, index) => {
    const product = data.find((product) => id === product.id);
    return (
      <StyledCart key={id}>
        <li>{product.name}</li>
        <li>
          {euroFormatter.format(product.variants[variant].price)} -{" "}
          {product.variants[variant].duration} Tage
        </li>

        <StyledRemove>
          <button onClick={() => handleRemoveProduct(index)}>Remove</button>
        </StyledRemove>
      </StyledCart>
    );
  });
};

export default ShoppingCart;

const StyledImage = styled(Image)`
  display: grid;
  justify-items: end;
`;

const StyledCart = styled.ul`
  display: grid;
  list-style: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: var(--color-text-normal);
`;


const StyledRemove = styled.div`
  grid-column: 1/2;
  width: 30%;
`;
