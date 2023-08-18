// import { useState } from "react";
import { CounterProps } from "./counter.types"

const Counter = ({ count, handleIncrement, handleDecrement }: CounterProps) => {
  // const [counter, setCounter] = useState(0);
  return (
    <>
      {/* <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div> */}
      <div>
        <h1>Counter two</h1>
        <p>{count}</p>
        {handleIncrement && (
          <button onClick={handleIncrement}>Increment</button>
        )}
        {handleDecrement && (
          <button onClick={handleDecrement}>Decrement</button>
        )}
      </div>
    </>
  )
}

export default Counter
