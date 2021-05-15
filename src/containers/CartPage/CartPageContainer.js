import React, {useContext} from "react";
import './CartPageContainer.css';
import {Link} from 'react-router-dom';
import CartList from '../../components/CartList/CartList';
import OrderPage from '../../components/OrderPage/OrderPage';
import { CartContext } from '../../context/cartContext';

export default function CartPageContainer() {
    const { cart } = useContext(CartContext);

    return(
        <div>
            <h2 className="header-cart">Carrito de Compras</h2>
            <button type="button" className="return-button btn btn-warning">
                <Link to={`/products`} className="link-text">Volver a productos</Link>
            </button>
            <div>
                <CartList />
            </div>
            { cart.length !== 0 &&
                <div>
                    <div className="d-flex flex-row-reverse">
                        <button type="button" className="end-button btn btn-outline-success" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm">
                            Ingresar Datos
                        </button>
                    </div>
                    <div className="collapse" id="collapseForm">
                        <OrderPage/>
                    </div>
                </div>
            }
        </div>
    )
}