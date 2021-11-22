import React, { useEffect } from "react";
import data from "../../../data/products.json";
import styled from "styled-components";

export const euroFormatter = new Intl.NumberFormat("de-de", {
  style: "currency",
  currency: "EUR",
});

export const ShoppingCart = (props) => {
  
  const handleRemoveProduct = (index) => {
    const shoppingCartCopy = [...props.shoppingCart];
    shoppingCartCopy.splice(index, 1);
    props.setShoppingCart(shoppingCartCopy);
  };
  return props.shoppingCart.map(({ id, variant }, index) => {
    const product = data.find((product) => id === product.id);
    return (
      <StyledCartOffer key={id}>
        <li>
          <li>{product.name}</li>
        </li>
        <StyledLi2>
          <li>
            {euroFormatter.format(product.variants[variant].price)} -{" "}
            {product.variants[variant].duration} Tage
          </li>
        </StyledLi2>
        <StyledRemove>
          <button onClick={() => handleRemoveProduct(index)}>Löschen</button>
        </StyledRemove>
      </StyledCartOffer>
    );
  });
};

export default ShoppingCart;

const StyledRemove = styled.div`
  grid-column: 1/2;
  grid-row: 2;
  margin: left;
  width: 50%;
`;

const StyledCartOffer = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;
  list-style: none;
  padding-left: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: var(--color-text-normal);
`;

const StyledLi2 = styled.li`
  justify-items: end;
`;
