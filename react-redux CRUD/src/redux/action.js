import { type } from "@testing-library/user-event/dist/type";
import { ACTIONS } from "../constants/constant";

//called as action creator
export const getUser = () => ({
  type: ACTIONS.GET_USER,
});

export const setUser = (payload) => ({
  type: ACTIONS.SET_USER,
  payload,
});

export const updateUser = (payload) => ({
  type: ACTIONS.UPDATE_USER,
  payload,
});

export const editUser = (payload) => {
  console.log("in action", payload);
  return {
    type: ACTIONS.EDIT_USER,
    payload,
  };
};

export const deleteUser = (id) => ({
  type: ACTIONS.DELETE_USER,
  payload: id,
});

export const removeUser = (id) => ({
  type: ACTIONS.REMOVE_USER,
  payload: id,
});

export const addUser = (payload) => ({
  type: ACTIONS.ADD_USER,
  payload,
});

export const putUser = (payload) => ({
  type: ACTIONS.PUT_USER,
  payload,
});
