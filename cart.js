import React, {useState, useEffect} from 'react';
import ShowProduct from './showproduct';
import UserCart from './userCart';


export default function Cart(){
    const {data, setData} = useState([]);
    const {cart, setCart} = useState([]);

    useEffect(() =>{
        fetch('https://dummyjson.com/products')
        .then(x => x.json())
        .then(x => setData(x.products))
    },[])

    const addToCartFunction = (termek) =>{
    const vanIlyen = cart.find(item => item.product.id ===termek.id)
        if(vanIlyen){
            const ujkosar = cart.map(item => 
                item.product.id === termek.id?{
                    ...item, quantity : item.quantity+1
                }: item
                ) 
        setCart(ujkosar);
        }
        else{
            setCart(...cart, {product:termek,quantity:1})
        }


    setCart(...cart, {product:termek, quantity: 1})
}

    const deleteFromCartFunction = (termek) => {
        const updatedCart = cart.filter(item => item.product.id !== termek.id)
    }
    return(
        data.map(products =>(
            <>
                <UserCart 
                cart = {cart}
                deleteFromCartFunction = {deleteFromCartFunction}
                setCart = {setCart}
                />
                <ShowProduct
                    products = {data}
                    addToCartFunction = {addToCartFunction}
                
                />

            </>

        ))
    )
}