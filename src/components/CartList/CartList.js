import React, {useContext} from "react";
import Cart from "../Cart/Cart";
import { CartContext } from '../../context/cartContext';

export default function CartList() {
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    console.log(cart) //para test

    const cartOrder = ["alfajor", "cookie", "muffin", "pasta-frola", "porty-box", "scon"]
    const sortedCart = Object.keys(cart).map(key => cart[key]);
    sortedCart.sort((a, b) => cartOrder.indexOf(a.categoria) - cartOrder.indexOf(b.categoria));
    console.log(sortedCart); //para test

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Categoría</th>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCart.map(item => (
                        <Cart key={item.id} itemSale={item} />
                    ))}
                </tbody>
                <tfoot>
                    { cart.length === 0 ? 
                        <tr id="footer-carrito">
                            <th className="empty-cart" scope="row" colSpan="5">Carrito vacío - comience a comprar!</th>
                        </tr>
                        :
                        <tr id="footer-carrito">
                            <td></td>
                            <td></td>
                            <td>
                                <button className="btn btn-danger btn-sm" id="vaciar-carrito" onClick={clearCart}>
                                    Vaciar Carrito
                                </button>
                            </td>
                            <td className="font-weight-bold">Total a abonar</td>
                            <td className="font-weight-bold">$ <span>{totalPrice}</span></td>
                        </tr>
                    }
                </tfoot>
            </table>
            <p className="cart-remark">IMPORTANTE: Antes de continuar con su compra por favor confirme cada elemento apretando el botón OK de cada uno.</p>
        </div>
        );
    }