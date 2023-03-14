import { act } from "react-dom/test-utils";
import { ACTIONS } from "../constants/constant";

const initialState = {
  details: [],
  isLoading: true,
};

export const reducer = (state = initialState, action) => {
  console.log("In reducer", action);
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        details: [...state.details, ...action.payload],

        isLoading: false,
      };
    case ACTIONS.EDIT_USER:
      console.log("reducer", action.payload);
      let data = state.details.map((user) => {
        console.log(user.id, action.payload.data);
        if (user.id == action.payload.data.id) {
          console.log("EDIT", action.payload);
          return { ...user, ...action.payload.data };
        } else {
          return user;
        }
      });
      return { ...state, details: data };
    case ACTIONS.REMOVE_USER:
      console.log(action.payload);
      let data1 = state.details.filter((user) => user.id !== action.payload);

      return { ...state, details: data1 };
    case ACTIONS.PUT_USER:
      return { ...state, ...state.details.push(action.payload.finaldata) };

    default:
      return state;
  }
};
