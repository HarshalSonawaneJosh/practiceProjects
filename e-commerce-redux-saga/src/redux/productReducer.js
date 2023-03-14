import { PRODUCT_LIST, REMOVE_FROM_CART, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("product list data from saga", action.data);
      return [...action.data];
    default:
      return data;
  }
};
