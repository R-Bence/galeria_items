import React from "react";

export default function UserCart({cart,deleteFromCartFunction}){
    
    return(
        <div>
            <h1>Kosár</h1>
            {cart.map(item => (
                <div>
                    <h2>{item.product.title}</h2>
                    <img src={item.product.thumbnail} alt={item.product.title}/>
                    <p>ár: {item.product.price} $</p>
                    <p>Mennyiség: {item.quantity}</p>
                    <button onClick={deleteFromCartFunction(item.product)}>Törlés</button>
                </div>
            ))}
        </div>
    );
}