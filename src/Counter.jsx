import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Welcome to Counter</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>0</button>
        <button onClick={() => {
          let ed = +prompt("ededi daxil edin ")
          setCount(ed)
        }}>special</button>
        <button onClick={() => console.log(count)}>console</button>
      </div>
    </div>
  );
};
export default Counter;
