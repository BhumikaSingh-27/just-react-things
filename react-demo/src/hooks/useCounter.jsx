import {useState} from 'react'

const useCounter = (initialValue=0, value) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
      setCount((count) => count + value);
    };
    const decrement = () => {
      setCount((count) => count - value);
    };
    const reset = () => {
      setCount(0);
    };
  return [count,increment,decrement,reset]
}

export default useCounter