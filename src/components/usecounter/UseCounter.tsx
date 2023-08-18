import { useState } from "react"
import { UseCounterProps } from "./usecounter.types"

const UseCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return { count, increment, decrement }
}

// const UseCounter = () => {
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
//     </div>
//   );
// };

export default UseCounter
