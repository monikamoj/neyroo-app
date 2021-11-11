import React, { useState } from "react";
import data from "../../../data/products.json";
import styled from "styled-components";
import Image from "next/dist/client/image";

export const Products = (props) => {
  const addProduct = (id) => {

    props.setShoppingCart([...props.shoppingCart, id]);
  };

  return data.map(
    ({ id, image, name, description, duration, variants, price }) => (
      <StyledCart key={id}>
        <h4>{name}</h4>
        <StyledImage src={image} alt={name} width={135} height={95} />
        <p>{description}</p>
        <p>{price ?? variants[0].price} €</p>
        <p>{duration} Tage </p>
        <div>
          <button onClick={() => addProduct(id)}></button>
        </div>
      </StyledCart>
    )
  );
};

export default Products;

const StyledImage = styled(Image)`
  display: grid;
  justify-items: end;
`;

const StyledCart = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: var(--color-text-normal);
`;
