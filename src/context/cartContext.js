import {createContext, useState } from 'react';

export const CartContext = createContext([]);

export default function AppContextProvider({defaultValue= [], children}){
    const [item, setItem] = useState(defaultValue);

    function getFromCart (id){
        return item.find(obj => obj.id === id)
    }

    function isInCart(id){
        return id === undefined ? undefined : getFromCart !== undefined
    }

    function addToCart(obj){
        if(isInCart(obj && obj.id)) {
            console.log("Cannot add an exisiting obj to cart")
            return;
        }
        setItem([...item, obj]);
    }

    return (
        <CartContext.Provider value={
            {
                item, 
                addToCart,
                isInCart,
                itemSize: item.length
            }
        }>
            {children}
        </CartContext.Provider>
    )
}