import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers/index";
import {
  applyNumber,
  clearDisplay,
  setMemory,
  memoryRecall,
  clearMemory,
  changeOperation,
} from "./actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const apply = (number) => {
    dispatch(applyNumber(number));
  };

  const operation = (operation) => {
    dispatch(changeOperation(operation));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b>
                {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => {
                  dispatch(setMemory());
                }}
              />
              <CalcButton
                value={"MR"}
                onClick={() => {
                  dispatch(memoryRecall());
                }}
              />
              <CalcButton
                value={"MC"}
                onClick={() => {
                  dispatch(clearMemory());
                }}
              />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => apply(1)} />
              <CalcButton value={2} onClick={() => apply(2)} />
              <CalcButton value={3} onClick={() => apply(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => apply(4)} />
              <CalcButton value={5} onClick={() => apply(5)} />
              <CalcButton value={6} onClick={() => apply(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => apply(7)} />
              <CalcButton value={8} onClick={() => apply(8)} />
              <CalcButton value={9} onClick={() => apply(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => {
                  operation("+");
                }}
              />
              <CalcButton
                value={"*"}
                onClick={() => {
                  operation("*");
                }}
              />
              <CalcButton
                value={"-"}
                onClick={() => {
                  operation("-");
                }}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => {
                  dispatch(clearDisplay());
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
