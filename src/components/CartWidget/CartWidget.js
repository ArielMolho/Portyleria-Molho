import React from 'react';
import './CartWidget.css';
import cart from '../../assets/images/emptyCart.png';
import {Link} from 'react-router-dom';

export default function CartWidget () {
    return(
        <div className="navbar-cart">
            <Link to={`/cart`}>
                <img src={cart} className="cart-icon" width="30" height="30" alt="Cart" loading="lazy"/>
            </Link>
        </div>
    )
}