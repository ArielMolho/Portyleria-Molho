import React, {useContext} from "react";
import './CartPageContainer.css';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import CartList from '../../components/CartList/CartList';

export default function CartPageContainer() {
    const { cart, setCart } = useContext(CartContext);
    //console.log(cart) //para test
    
    function handleRemove(id) {
        const newcart = cart.filter((item) => item.id !== id);
        setCart(newcart);
    }

    return(
        <div>
            <h2 className="header-cart">Carrito de Compras</h2>
            <div>
                <CartList list={cart} onRemove={handleRemove} />
            </div>
            <button type="button" className="return-button btn btn-warning">
                <Link to={`/products`} className="link-text">Continuar comprando</Link>
            </button>
        </div>
    )
}