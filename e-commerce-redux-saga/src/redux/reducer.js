//reducer always contain one return statement or initial value otherwise it will throws an error.

import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

//data is like initialData.
export const cartData = (data = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.warn("Reducer called ", action);
  //     return action.data;
  //   } else return "no action called";

  switch (action.type) {
    case ADD_TO_CART:
      //add to cart logic.
      console.warn("add to cart condition in reducer", action);

      return [action.product, ...data];

    case REMOVE_FROM_CART:
      //remove to cart logic.
      console.warn("remove to cart condition in reducer", action);
      const remainingItem = data.filter((item) => item.id !== action.id);
      console.warn("remaining items", remainingItem);
      return [...remainingItem];

    case EMPTY_CART:
      //empty cart logic
      console.warn("empty to cart condition in reducer", action);

      data = [];
      return [...data];
    default: //no case matched
      return data;
  }
};
