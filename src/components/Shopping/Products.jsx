import React, { useState } from "react";
import data from "../../../data/products.json";
import styled from "styled-components";
import Image from "next/dist/client/image";
import { VariantsDropDown } from "./VariantsDropDown";
import Select from "react-select";

export const Products = (props) => {
  const addProduct = (id, variant) => {
    props.setShoppingCart([...props.shoppingCart, { id, variant }]);
  };

  const [selectOption, setSelectOption] = useState(null);

  return data.map(
    ({ id, image, name, description, variants }) => (
      <StyledCart key={id}>
        <StyledImage src={image} alt={name} width={145} height={115} />
        <TextWrapper>
          <h4>{name}</h4>
          <StyledText>{description}</StyledText>
        </TextWrapper>
        <VariantsDropDown key={id} variants={variants} selectOption={selectOption} setSelectOption={setSelectOption} />
        <StyledVariants>
          <button onClick={() => addProduct(id, selectOption.value)}>Auswählen</button>
        </StyledVariants>
      </StyledCart>
    )
  );
};

export default Products;

const StyledCart = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: var(--color-text-normal);
  display: grid;
  justify-content: start;
  justify-items: stretch;
  align-items: start;
  grid-gap: 15px;
`;

const TextWrapper = styled.a`
  grid-column: 2/3;
  align-items: stretch;
`;

const StyledImage = styled(Image)`
  grid-column: 1/2;
`;

const StyledText = styled.p`
  grid-column: 2/3;
`;

const StyledVariants = styled.ul`
  grid-column: 1/2;
  justify-items: stretch;
  font-family: "Montserrat", sans-serif;
  list-style: none;
  font-size: 15px;
  padding-left: 0;
`;
