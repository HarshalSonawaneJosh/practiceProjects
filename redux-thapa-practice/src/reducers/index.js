import { combineReducers } from "redux";
import changeNumber from "./upDown";

const rootReducer = combineReducers({
  changeNumber: changeNumber, //reducer
});

export default rootReducer;
