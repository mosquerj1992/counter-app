
import { useState } from 'react';
import './App.css'

function App() {


  const initialValue = 1000
  const [count, setCount] = useState(initialValue);

  function decrement() {

    console.log(count);
    setCount((count) => count - 1);

  }
  function reset() {
    console.log(count);
    setCount(initialValue);
  }

  function increment(event) {
    console.log(event);
    setCount((count) => count + 1);
  }

  return (
    <>

      <h1>Contador-App</h1>
      <h3>El valor del contador es: {count}</h3>


      <div className="card">
        <button onClick={(event)=>decrement(event)}>reducir</button>
        <button onClick={reset}>reiniciar</button>
        <button onClick={increment}>incrementar</button>

      </div>

    </>
  );
};

export default App
