import React, {useContext} from "react";
import './CartWidget.css';
import emptycart from '../../assets/images/emptyCart.png';
import fullcart from '../../assets/images/fullCart.png';
import { CartContext } from '../../context/cartContext';
import {Link} from 'react-router-dom';

export default function CartWidget () {
    const { cart } = useContext(CartContext);
    
    return(
        <div className="navbar-cart">
            { cart.length === 0 ? 
                <Link to={`/cart`}>
                    <img src={emptycart} className="cart-icon" width="30" height="30" alt="Cart" loading="lazy"/>
                </Link>
                :
                <Link to={`/cart`}>
                    <img src={fullcart} className="cart-icon" width="30" height="30" alt="Cart" loading="lazy"/>
                </Link>
            }
        </div>
    )
}