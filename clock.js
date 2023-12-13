import React, { useEffect, useState } from "react";

export default function Clock() {
  const [datumIdo, setDatumido] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDatumido(new Date());
    }, 1000);


    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <div>
      {datumIdo.toLocaleString()}
    </div>
  );
}
