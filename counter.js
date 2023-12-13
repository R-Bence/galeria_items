import React, { useState } from "react";

export default function CountButton() {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Kattintás: {counter}
    </button>
  );
}
