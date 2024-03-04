import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value2, setValue2] = useState("");

  const increment = () => {
    setCount(count + 1)
  }
   
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <button onClick={() => setValue2(value2 + "q")}>String - {value2}</button>
      <span></span>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
