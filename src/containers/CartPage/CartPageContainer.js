import React, {useEffect} from "react";
import './CartPageContainer.css';
import {Link, useLocation } from 'react-router-dom';

export default function CartPageContainer() {
    const location = useLocation();
    
    useEffect(() => {
        let variable = Object.values(location.state.cart)
        console.log(variable);
    }, [location]);

    let post = location.state.cart;
    console.log(post);
    return(
        <div>
            <h2 className="header-cart">Carito de Compras</h2>

            <button type="button" className="return-button btn btn-warning">
                <Link to={`/products`} className="link-text">Continuar comprando</Link>
            </button>
        </div>
    )
}

// ver como hacer que si entramos a carrito y está vacío no se rompa