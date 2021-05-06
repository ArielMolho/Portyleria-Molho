import {createContext, useState, useEffect } from 'react';

export const CartContext = createContext([]);

export default function AppContextProvider({children}){
    const [cart, setCart] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
    const [count, setCount] = useState();

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

    function updateToCart({id, tipo, precio, cantidad}) {
        const isCurrentInCart = isInCart(id)
        if (isCurrentInCart) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        cantidad: cantidad
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

    useEffect(() => {
		const Total = () => {
			let totalPrice = 0;
			let totalItems = 0;
			for (const Item of cart) {
				totalPrice = totalPrice + Item.precio * Item.cantidad;
				totalItems += Item.cantidad;
			}
			setTotalItems(totalItems);
			setTotalPrice(totalPrice.toFixed(2));
		};
		Total();
	}, [cart]);

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                clearCart,
                updateToCart,
                totalPrice, 
                totalItems,
                count,
                setCount
            }
        }>
            {children}
        </CartContext.Provider>
    )
}