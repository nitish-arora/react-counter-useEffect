import "./styles.css";
import { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(20);
  const [isPaused, setIsPaused] = useState(false);

  const timer = useRef();

  const updateCounter = useCallback(() => {
    if (counter === 0) return;
    timer.current = setTimeout(() => {
      let updatedValue = counter - 1;
      setCounter(updatedValue);
    }, 1000);
  }, [counter]);

  useEffect(() => {
    if (!isPaused) {
      updateCounter();
    } else {
      clearTimeout(timer.current);
    }
  }, [isPaused, updateCounter]);

  const actionHandler = () => {
    setIsPaused((paused) => !paused);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      {counter}
      <div>
        <button onClick={actionHandler}>{isPaused ? "Start" : "Stop"}</button>
      </div>
    </div>
  );
}
