/*import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer);

export default store;
*/

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productSaga);
export default store;
