import React from 'react';
import './CartWidget.css';
import cart from '../../assets/images/emptyCart.png';

export default function CartWidget () {
    return(
        <div className="navbar-cart">
            <a href="#">
                <img src={cart} className="cart-icon" width="30" height="30" alt="Cart" loading="lazy"/>
            </a>
        </div>
    )
}