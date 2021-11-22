import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";
import { VariantsDropDown } from "./VariantsDropDown";

export const Product = (props) => {
  const [selectOption, setSelectOption] = useState();

  return (
    <StyledCart>
      <StyledImage
        src={props.image}
        alt={props.name}
        width={145}
        height={115}
      />
      <TextWrapper>
        <h4>{props.name}</h4>
        <StyledText>{props.description}</StyledText>
      </TextWrapper>
      <VariantsDropDown
        variants={props.variants}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
      />
      <StyledVariants>
        <button onClick={() => props.addProduct(props.id, selectOption.value)}>
          Auswählen
        </button>
      </StyledVariants>
    </StyledCart>
  );
};

export default Product;

const StyledCart = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: var(--color-text-normal);
  display: grid;
  grid-template-columns: 150px 55%;
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
  align-items: flex-start;
  grid-column: 1/2;
  max-width: 145px;
  max-height: 115px;
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
  margin-top: 0;
`;
