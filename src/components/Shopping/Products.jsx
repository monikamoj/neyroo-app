import React, { useState } from "react";
import data from "../../../data/products.json";
import Product from "./Product";

export const Products = (props) => {
  const addProduct = (id, variant) => {
    props.setShoppingCart([...props.shoppingCart, { id, variant }]);
  };

  return data.map(({ id, image, name, description, variants }) => (
    <Product
      key={id}
      image={image}
      name={name}
      description={description}
      addProduct={addProduct}
      id={id}
      variants={variants}
    />
  ));
  
};

export default Products;
