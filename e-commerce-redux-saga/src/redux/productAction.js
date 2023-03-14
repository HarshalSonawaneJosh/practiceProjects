import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";

export const productList = () => {
  // let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  // data = await data.json();
  return {
    type: PRODUCT_LIST, //continue saga file watch karat rahil type vrtun.
  };
};

// Used for searching a product.
export const productSearch = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
