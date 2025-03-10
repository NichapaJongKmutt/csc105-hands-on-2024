import { useState } from "react";

import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const add = () => {
    setResult(result + input);
  };
  const subtract = () => {
    setResult(result - input);
  };
  const multiply = () => {
    setResult(result * input);
  };
  const divide = () => {
    setResult(result / input);
  };
  const resetInput = () => {
    setInput("");
  };
  const resetResult = () => {
    setResult(0);
  };

  return (
    <div>
      <div className="body-container">
        <div className="box">
          <h1>Simple Calculator</h1>
          <div className="result">Result:{result}</div>
          <div className="input-box">
            <input
              type="number"
              value={input}
              placeholder="Enter a number"
              onChange={(e) =>
                setInput(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </div>
          <div className="btn-cal">
            <button onClick={add}>Add</button>
            <button onClick={subtract}>Subtract</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>
            <button id="reset" onClick={resetInput}>
              Reset Input
            </button>
            <button id="reset" onClick={resetResult}>
              Reset Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
