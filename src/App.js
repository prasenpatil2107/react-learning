/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [curtime, setCurTime] = useState(0);

  setInterval(() => {
    setCurTime(new Date().toLocaleTimeString());
  }, 2000);
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber(5))}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={mystate}
            />
            <a
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNumber(5))}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <h4> This for use state counter </h4>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>click me</button>
      </div>
      <div className="container">
        <h4> This forcurrent time </h4>
        <p>{curtime}</p>
      </div>
    </>
  );
};

export default App;
