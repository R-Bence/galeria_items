import React, { useState, useEffect } from "react";
import CountButton from './counter';
import Countergroup from "./countergroup";

export default function Galeria() {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(x => x.json())
      .then(x => setData(x.products))
      .catch(error => console.log(error))
  }, []);

  const [sculptureList, setData] = useState([]);
  const [i, setIndex] = useState(0);
  const [x, setX] = useState(0);

  function lep() {
    if (i !== sculptureList.length - 1) {
      setIndex(i + 1);
      setX(0);
    }
  }

  function vissza() {
    if (i > 0) {
      setIndex(i - 1);
      setX(0);
    }
  }

  function kepcsereles() {
    if (adat.images.length > 1) {
      if (x === adat.images.length - 1) {
        setX(0);
      } else {
        setX(x + 1);
      }
    }
  }

  function kepcs() {
    return adat.images[x];
  }

  let adat = sculptureList[i];

  return (
    <div>
      <h1>Galéria</h1>
      <CountButton />
      {sculptureList.length > 0 && (
        <>
          <h2>{adat.title}</h2>
          <img src={kepcs()} alt={adat.title} onClick={kepcsereles} />
          <p>{adat.description}</p>
          <p>Kép: {i + 1}/{sculptureList.length}</p>
          <button onClick={vissza} disabled={i < 1}>
            Vissza
          </button>
          <button onClick={lep} disabled={i === sculptureList.length - 1}>
            Következő
          </button>
          <Countergroup />
        </>
      )}
    </div>
  );
}
