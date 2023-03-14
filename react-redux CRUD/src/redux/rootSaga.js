import { put, takeLatest } from "redux-saga/effects";
import { DELETE, GET, PATCH, POST } from "../api/axios";
import { ACTIONS } from "../constants/constant";
import { deleteUser, editUser, putUser, removeUser, setUser } from "./action";

export function* watcherSaga() {
  yield takeLatest(ACTIONS.GET_USER, handleGetUser);
  yield takeLatest(ACTIONS.UPDATE_USER, handleUpdateUser);
  yield takeLatest(ACTIONS.DELETE_USER, handleDeleteUser);
  yield takeLatest(ACTIONS.ADD_USER, handleAddUser);
}
// worker saga
export function* handleGetUser() {
  try {
    const data = yield GET("/users");
    yield put(setUser(data.data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateUser(action) {
  try {
    let data = yield PATCH(
      `/users/${action.payload.finaldata.id}`,
      action.payload.finaldata
    );
    yield put(editUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteUser(action) {
  try {
    yield DELETE(`/users/${action.payload}`);
    yield put(removeUser(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddUser(action) {
  try {
    yield POST("/users", action.payload);
    yield put(putUser(action.payload));
  } catch (error) {
    console.log(error);
  }
}
