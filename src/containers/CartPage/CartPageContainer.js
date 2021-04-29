import React from "react";
import './CartPageContainer.css';
import {Link} from 'react-router-dom';

export default function CartPageContainer() {

    return(
        <div>
            <h2 className="header-cart">Carito de Compras</h2>

            <button type="button" className="return-button btn btn-warning">
                <Link to={`/products`} className="link-text">Continuar comprando</Link>
            </button>
        </div>
    )
}

/*
    const location = useLocation()
    const cart = location.state?.cart
    //console.log(props)
*/