import React, {useContext} from "react";
import Cart from "../Cart/Cart";
import { CartContext } from '../../context/cartContext';

export default function CartList({ list, onRemove }) {
    const { cart, clearCart } = useContext(CartContext);
    console.log(cart) //para test
    //console.log(cart[0].cantidad) //para test
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Acción</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <Cart key={item.id} itemSale={item} onRemove={onRemove}/>
                    ))}
                </tbody>
                <tfoot>
                    { list === undefined ? 
                        <tr id="footer-carrito">
                            <th className="empty-cart" scope="row" colSpan="5">Carrito vacío - comience a comprar!</th>
                        </tr>
                        :
                        <tr id="footer-carrito">
                            <th></th>
                            <td></td>
                            <td>
                                <button className="btn btn-danger btn-sm" id="vaciar-carrito" onClick={clearCart}>
                                    Vaciar Carrito
                                </button>
                            </td>
                            <td className="font-weight-bold">Total a abonar</td>
                            <td className="font-weight-bold">$ <span>{}</span></td>
                        </tr>
                    }
                </tfoot>
            </table>
        </div>
        );
    }