//number of actions also presents eg ->addToCart,removeToCart,updateTocart

import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (product) => {
  console.log("addToCart action called", product);
  return {
    type: ADD_TO_CART,
    product: product,
  };
};

export const removeFromCart = (id) => {
  console.log("removeFromCart action called", id);
  return {
    type: REMOVE_FROM_CART,
    id: id,
  };
};

//No need to pass data for empty cart
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
