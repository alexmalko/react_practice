import React, { useState } from "react";

// functional component with hooks
const Counter = (props) => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="Counter">
      <h1>Counter Element</h1>
      <div>{count}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
