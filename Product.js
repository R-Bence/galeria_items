import React, { useState, useEffect } from 'react';

function Product(props) {
  return (
    <div>
      <h2>{props.nev}</h2>
      <img src={props.kep} alt={props.nev} width={150} />
      <p>{props.ar} Ft.</p>
      <p>{props.leiras}</p>
    </div>
  );
}
function ProductList() {
    const [data, setData] = useState([]); //adat megörzésére szolgál.
    useEffect(() => {
      const fetchData = async () => {
        fetch('https://dummyjson.com/products')
        .then(x => x.json())
        .then(x => setData(x.products))}
      fetchData(); 
    }, []); //nyíl függvény, tömb használata.
  
    return (
      <div>
        <h1>Termékek</h1>
        {Array.isArray(data) ? (
          data.map((item) => (
            <div key={item.id} className='termekDiv'>
              <Product
                id={item.id}
                nev={item.title} // Corrected prop name from title to nev
                ar={item.price}
                kep={item.images[0]}
                leiras={item.description}
              />
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }

export default ProductList;
