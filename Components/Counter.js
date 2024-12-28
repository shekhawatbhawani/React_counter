import React from 'react';
import React, { useState } from 'react';
const Counter = () => {
  const [count,setCount] = useState(90)
  return (
    <div id="counter-container">
      <p id="value">{count}</p>
      <button id="add-btn" onClick={setCount(count+1)}>Add</button>
      <button id="reset-btn" onClick={setCount(count = 0)}>Reset</button>
      <button id="minus-btn" onClick={setCount(count-1)}>Minus</button>
    </div>
  )
}

export default Counter
