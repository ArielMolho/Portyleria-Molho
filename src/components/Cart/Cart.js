import React, { useContext } from "react";
import trash from '../../assets/images/delete.png';
import { CartContext } from '../../context/cartContext';

export default function Cart({ itemSale }) {
    const { updateToCart, handleRemove } = useContext(CartContext);

    function capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    function increaseQuantity(){
        const newItem = {
            id: itemSale.id,
            categoria: itemSale.categoria,
            tipo: itemSale.tipo,
            precio: itemSale.precio,
            cantidad: itemSale.cantidad +1
        };
        updateToCart(newItem);
    }

    function reduceQuantity(){
        const newItem = {
            id: itemSale.id,
            categoria: itemSale.categoria,
            tipo: itemSale.tipo,
            precio: itemSale.precio,
            cantidad: itemSale.cantidad -1
        };
        updateToCart(newItem);
    }

    return (
        <tr>
            <th>{capitalizarPrimeraLetra(itemSale.categoria)}</th>
            <td>{itemSale.tipo}</td>
            <td>
                {
                    itemSale.cantidad < 5 ? <button onClick={increaseQuantity} className="btn btn-info btn-sm action-button">+</button> : <button className="btn btn-info btn-sm action-button" disabled>+</button>
                }
                <span className="cart-visual">{itemSale.cantidad}</span>
                {
                    itemSale.cantidad > 1 ? <button onClick={reduceQuantity} className="btn btn-danger btn-sm action-button">-</button> : <button className="btn btn-danger btn-sm action-button" disabled>-</button>
                }
            </td>
            <td>
                <button onClick={() => handleRemove(itemSale.id)} className="btn btn-warning btn-sm action-button">
                    <img src={trash} alt="Borrar"/>
                </button>
            </td>
            <td>$ <span>{(itemSale.precio*itemSale.cantidad).toFixed(2)}</span></td>
        </tr>
    );
}