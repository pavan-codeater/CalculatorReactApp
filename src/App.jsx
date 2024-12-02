// import React from 'react'
import "./App.css";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  let reset = useRef();
  let equals = useRef();
  let input = useRef();

  function handleReset() {
    input.current.value = "";
  }

  function handleEquals() {
    if (!input.current.value) {
      return;
    }

    var res = eval(input.current.value);
    input.current.value = res;
  }

  var afterDeleteString = "";
  let index;
  function handleDelete() {
    index = 0;
    afterDeleteString = "";
    var temp = input.current.value;
    while (index < temp.length - 1) {
      afterDeleteString += temp.charAt(index);
      console.log(afterDeleteString);

      index++;
    }

    input.current.value = afterDeleteString;
  }

  function handleClick(name) {
    input.current.value += name;
  }

  return (
    <div id="main-container">
      <h1>Calculator App</h1>
      <input
        placeholder="enter numbers..."
        ref={input}
        type="text"
        className="text"
      />
      <div className="numbers-symbol">
        <div className="rows">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleDelete()}>DEL</button>
        </div>
        <div className="rows">
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>
        <div className="rows">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>
        </div>
        <div className="rows">
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>*</button>
        </div>
        <div className="reset-equals">
          <button ref={reset} onClick={() => handleReset()} className="reset">
            <p>RESET</p>
          </button>
          <button ref={equals} onClick={() => handleEquals()} className="reset">
            <p>Result</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
