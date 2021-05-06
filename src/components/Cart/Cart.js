import React, { useState, useContext } from "react";
import trash from '../../assets/images/delete.png';
import { CartContext } from '../../context/cartContext';

export default function Cart({ itemSale, onRemove }) {
    const [number, setNumber] = useState(itemSale.cantidad);
    const { updateToCart } = useContext(CartContext);
    console.log(number); //para test
    
    function onIncrement() {
        setNumber(number + 1);
        itemSale.cantidad = number;
    }

    function onDecrement() {
        setNumber(number - 1);
        itemSale.cantidad = number;
    }

    const [show, setShow] = useState(false);

    function updateQuantity(){
        const newItem = {
            id: itemSale.id,
            tipo: itemSale.tipo,
            precio: itemSale.precio,
            cantidad: number
        };
        console.log(newItem);
        updateToCart(newItem);
        setShow({
            hidden: true
        });
    }

    return (
        <tr>
            <th scope="row">{itemSale.id}</th>
            <td>{itemSale.tipo}</td>
            <td>
                {
                    number < 5 ? <button onClick={onIncrement} hidden={show.hidden} className="btn btn-info btn-sm action-button">+</button> : <button hidden={show.hidden} className="btn btn-info btn-sm action-button" disabled>+</button>
                }
                <span className="cart-visual">{number}</span>
                {
                    number > 1 ? <button onClick={onDecrement} hidden={show.hidden} className="btn btn-danger btn-sm action-button">-</button> : <button hidden={show.hidden} className="btn btn-danger btn-sm action-button" disabled>-</button>
                }
            </td>
            <td>
                <button onClick={updateQuantity} className="btn btn-success btn-sm action-button">OK</button>
                <button onClick={() => onRemove(itemSale.id)} className="btn btn-warning btn-sm action-button">
                    <img src={trash} alt="Borrar"/>
                </button>
            </td>
            <td>$ <span>{(itemSale.precio*number).toFixed(2)}</span></td>
        </tr>
    );
}