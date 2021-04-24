import React from "react";
import './CartPageContainer.css';
import {Link} from 'react-router-dom';

export default function CartPageContainer() {

    return(
        <div>
            <h2 className="header">Cart</h2>

            <Link to={`/products`} className="cart-link">Continuar comprando</Link>
        </div>
    )
}