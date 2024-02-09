import React, { useState, useEffect } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(10);

  const incCounter = () => {
    setCount(count + 1);
  };

  const decCounter = () => {
    setCount(count - 1);
  };

    useEffect(() => {
        document.title = `React Counter Changed ${count}`;
        console.log(`Counter value changed: ${count}`);
    }, [count]);

  const counterStyles = {
    textAlign: "center",
    fontSize: "30px",
    margin: "20px",
  };

  const buttonStyles = {
    fontSize: "25px",
    margin: "10px",
    padding: "8px 16px",
    cursor: "pointer",
  };

  return (
    <div style={counterStyles}>
      <h1>React Counter App: {count}</h1>
      <button style={buttonStyles} onClick={incCounter}>Increment ➕👍</button>
      <button style={buttonStyles} onClick={decCounter}>Decrement ➖👎</button>
    </div>
  );
};

export default CounterApp;