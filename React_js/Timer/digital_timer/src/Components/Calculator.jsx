import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    const result = eval(input);
    setInput(result.toString());
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <br />
      <button onClick={clearInput}>Clear</button>
      <button onClick={calculateResult}>=</button>
      <button onClick={() => setInput(input + "+")}>+</button>
      <button onClick={() => setInput(input + "-")}>-</button>
      <button onClick={() => setInput(input + "*")}>*</button>
      <button onClick={() => setInput(input + "/")}>/</button>
      <br />
      <button onClick={() => setInput(input + "7")}>7</button>
      <button onClick={() => setInput(input + "8")}>8</button>
      <button onClick={() => setInput(input + "9")}>9</button>
      <br />
      <button onClick={() => setInput(input + "4")}>4</button>
      <button onClick={() => setInput(input + "5")}>5</button>
      <button onClick={() => setInput(input + "6")}>6</button>
      <br />
      <button onClick={() => setInput(input + "1")}>1</button>
      <button onClick={() => setInput(input + "2")}>2</button>
      <button onClick={() => setInput(input + "3")}>3</button>
      <br />
      <button onClick={() => setInput(input + "0")}>0</button>
      <button onClick={() => setInput(input + ".")}>.</button>
    </div>
  );
}

export default Calculator;