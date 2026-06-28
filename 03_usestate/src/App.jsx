import { useState } from "react";
import "./App.css";

import Display from "./components/Display";
import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">

      <h1>Практична робота React</h1>

      <div className="block">
        <h2>Завдання 1</h2>

        <button
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          {count}
        </button>
      </div>

      <div className="block">
        <h2>Завдання 2</h2>

        <Display value={count} />

        <Counter click={() => setCount(count + 1)} />
      </div>

      <div className="block">
        <h2>Завдання 3</h2>

        <Display value={count} />

        <CounterButton text="+1" value={1} setCount={setCount} />
        <CounterButton text="+10" value={10} setCount={setCount} />
        <CounterButton text="-100" value={-100} setCount={setCount} />
        <CounterButton text="+25" value={25} setCount={setCount} />

      </div>

    </div>
  );
}

export default App;