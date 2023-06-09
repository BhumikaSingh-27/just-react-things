import React from "react";
import useCounter from "../hooks/useCounter";

const CounterTwo = () => {
const [count,increment,decrement,reset] = useCounter(0,1)

  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterTwo;
