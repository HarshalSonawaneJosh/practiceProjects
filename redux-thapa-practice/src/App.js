import React from "react";
import "./App.css";
import { incNumber, decNumber } from "./actions";

import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const myState = useSelector((state) => state.changeNumber); //state.changenumber navach reducer or function select kr as meaning hoto yacha.
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <button
            className="quantity_minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </button>
          <input
            type="text"
            name="quantity"
            className="quantity_input"
            value={myState}
          />
          <button
            className="quantity_plus"
            title="Increment"
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
