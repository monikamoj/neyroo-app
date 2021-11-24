import React, { useState } from "react";
import data from "../../../data/products.json";
import Product from "./Product";
import Collapsible from "react-collapsible";
import styled from "styled-components";

export const Products = (props) => {
  const addProduct = (id, variant) => {
    props.setShoppingCart([...props.shoppingCart, { id, variant }]);
  };
  const [isOpen, setIsOpen] = useState(true);

  return data.map(({ id, image, name, description, variants }) => (
    <CollDiv key={id}>
      <Collapsible trigger={name} open={isOpen}>
        <p>
          <Product
            image={image}
            description={description}
            addProduct={addProduct}
            id={id}
            variants={variants}
          />
        </p>
      </Collapsible>
    </CollDiv>
  ));
};

export default Products;

const CollDiv = styled.div`
  color: var(--color-text-normal);
  font-family: "Montserrat", sans-serif;
`;
