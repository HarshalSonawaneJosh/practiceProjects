//async operation krto tevha result return vhayla pahijel mhnun aapan * generator function use karto.and yeild tyachyat.
import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();
  //console.warn("action -> saga called", data);
  yield put({ type: SET_PRODUCT_LIST, data: data }); //calling directly to productReducer.
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, data: result }); //calling directly to productReducer.
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
