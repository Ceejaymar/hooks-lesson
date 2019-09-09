import React, { useState } from 'react';

const CounterHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>counter: {count}</button>
    </div>
  )
}

export default CounterHook;










// * param1 reference to our piece state
  // * param2 function that change the value of that state
