import React, { useState } from "react";

function Counter() {
  //declare a or multiple state variable/s
  //useState() parameter is the initial value of the state
  //in this case is 0
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}

export default Counter;
