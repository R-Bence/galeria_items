import React, { useState, useEffect } from 'react';
import Clock from './clock';
import './tablazat.css';

const ProductDetails = ({ selectedItem }) => {
  if (!selectedItem) {
    return null;
  }

  return (
    <div className='product'>
      <h4>{selectedItem.title}</h4>
      <img src={selectedItem.images[0]} alt={selectedItem.title} style={{ height: "150px", margin: "1px" }} />
      <h2>Ár: {selectedItem.price ? `${selectedItem.price.toFixed(2)}$ (${(347 * selectedItem.price).toFixed(0)} Ft)` : 'N/A'}</h2>
      <p>{selectedItem.description}</p>
    </div>
  );
};

const Tablazat = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Updated initial state to null
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      fetch('https://dummyjson.com/products')
        .then(x => x.json())
        .then(x => setData(x.products))
    };

    fetchData();
  }, []);

  const filteredData = data.filter(product => product.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <input
        type="text"
        placeholder="Szűrés..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Termék neve</th>
            <th>Ár</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(product => (
            <tr
              key={product.id}
              className={product.id === selectedItem?.id ? "selected" : "normal"} // Use optional chaining to check if selectedItem exists
              onClick={() => setSelectedItem(product)}
            >
              <td>{product.title}</td>
              <td>{product.price} $</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Clock />

      <ProductDetails selectedItem={selectedItem} />
    </>
  );
};

export default Tablazat;
