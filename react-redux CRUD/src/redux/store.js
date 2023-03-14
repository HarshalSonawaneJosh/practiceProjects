import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { watcherSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = configureStore({ reducer, middleware: () => middleware });
sagaMiddleware.run(watcherSaga);

export default store;
