import React from "react";
import data from "../../../data/products.json";

export const ItemCart = () => {
  return data.products.map(({ id, name, description, duration, price }) => (
    <div key={id}>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{price}</p>
      <p>{duration}</p>
      <button>Add to Cart</button>
    </div>
  ));
};

export default ItemCart;
