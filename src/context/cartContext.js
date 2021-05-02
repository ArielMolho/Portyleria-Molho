import {createContext, useState } from 'react';

export const CartContext = createContext([]);

export default function AppContextProvider({defaultValue= [], children}){
    const [cart, setCart] = useState(defaultValue);

    function getFromCart (id){
        return cart.find(obj => obj.id === id)
    }

    function isInCart(id){
        return id === undefined ? undefined : getFromCart !== undefined
    }

    function addToCart(obj){
        if(isInCart(obj && obj.id)) {
            console.log("Cannot add an exisiting obj to cart")
            return;
        }
        setCart([...cart, obj]);
    }

    return (
        <CartContext.Provider value={
            {
                cart, 
                addToCart,
                isInCart,
                cartSize: cart.length
            }
        }>
            {children}
        </CartContext.Provider>
    )
}