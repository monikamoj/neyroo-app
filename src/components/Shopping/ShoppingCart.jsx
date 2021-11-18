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

        <StyledRemove>
          <button onClick={() => handleRemoveProduct(product)}>Remove</button>
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

const StyledCart = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: var(--color-text-normal);
`;

const StyledRemove = styled.div`
  width: 30%;
`;

/*
const totalPrice = cartItems.reduce(
  (price, item) => price + item.quantity * item.price,
  0
);

const handleRemoveProduct = (product) => {
  const ProductExist = product.find((item) => item.id === product.id);
  if (ProductExist.quantity === 1) {
    setRemoveProduct(product.filter((item) => item.id !== product.id));
  } else {
    setRemoveProduct(
      product.map((item) =>
        item.id === product.id
          ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
          : item
      )
    );
  }
};

<div>
          {item.quantity} * {item.price}
        </div>
        <div>{totalPrice}</div>

*/
