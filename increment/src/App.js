import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)

  function incrementValue(){
    setCount(count + 1)
  }

  function decrementValue(){
    setCount(count - 1)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>{count}</h1>
        <p className="message">hh</p>
        <button onClick={decrementValue} className="decrement-btn">-</button>
        <button onClick={incrementValue} className="increment-btn">+</button>
      </div>
    </div>
  );
}

export default App;
