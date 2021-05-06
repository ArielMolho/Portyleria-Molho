import React from "react";
import './CartPageContainer.css';
import {Link} from 'react-router-dom';
import CartList from '../../components/CartList/CartList';

export default function CartPageContainer() {

    return(
        <div>
            <h2 className="header-cart">Carrito de Compras</h2>
            <div>
                <CartList />
            </div>
            <button type="button" className="return-button btn btn-warning">
                <Link to={`/products`} className="link-text">Continuar comprando</Link>
            </button>
        </div>
    )
}