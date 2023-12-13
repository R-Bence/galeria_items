import React, { useState } from "react";

export default function Countergroup() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>Kattintások: {counter}</h2>
      <button onClick={handleClick}>Gomb 1</button>
      <button onClick={handleClick}>Gomb 2</button>
      <button onClick={handleClick}>Gomb 3</button>
    </div>
  );
}
