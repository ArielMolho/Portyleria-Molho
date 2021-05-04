import {createContext, useState } from 'react';

export const CartContext = createContext([]);

export default function AppContextProvider({defaultValue= [], children}){
    const [cart, setCart] = useState(defaultValue);

    // const [totalPrice, setTotalPrice] = useState(0);
	// const [totalItems, setTotalItems] = useState(0);

    function isInCart (id) {
        return cart.some(item => item.id === id)
    }

    function addToCart({id, tipo, precio, cantidad}) {
        const isCurrentInCart = isInCart(id)
        if (isCurrentInCart) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        cantidad: cantidad + item.cantidad
                    }
                }
                return item
            })
            return setCart([...newCart])
        }
        setCart([...cart, {id, tipo, precio, cantidad}])
    }

    function clearCart(){
        setCart([]);
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                clearCart,
                // totalPrice, 
                // totalItems
            }
        }>
            {children}
        </CartContext.Provider>
    )
}