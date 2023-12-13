import React from "react";
import './cart.js';

export default function ShowProduct({products,addToCartFunction}){
    return(
        products.map( product =>
            <div>
                <div>
                    <h2>{products.title}</h2>
                    <img src={products.thumbnail} alt={product.title}/>
                    <p>{product.description}</p>
                    <button onClick={() => addToCartFunction(product)}>Kosárba</button>
                </div>
            </div>
            )
    )
}