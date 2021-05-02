import React, { useState } from "react";
import trash from '../../assets/images/delete.png';

export default function Cart({ itemSale, onRemove }) {
    const [number, setNumber] = useState(itemSale.cantidad);
    console.log(itemSale.value) //para test
    function onIncrement() {
        setNumber(number + 1);
        itemSale.Cantidad = number;
        console.log(itemSale.cantidad);
    }

    function onDecrement() {
        setNumber(number - 1);
        itemSale.Cantidad = number;
        console.log(itemSale.cantidad);
    }
    return (
        <tr>
            <th scope="row">{itemSale.id}</th>
            <td>{itemSale.tipo}</td>
            <td>{number}</td>
            <td>
                {
                    number < 5 ? <button onClick={onIncrement} className="btn btn-info btn-sm action-button">+</button> : <button onClick={onIncrement} className="btn btn-info btn-sm action-button" disabled>+</button>
                }
                {
                    number > 1 ? <button onClick={onDecrement} className="btn btn-danger btn-sm action-button">-</button> : <button onClick={onDecrement} className="btn btn-danger btn-sm action-button" disabled>-</button>
                }
                <button onClick={() => onRemove(itemSale.id)} className="btn btn-warning btn-sm action-button">
                    <img src={trash} alt="Borrar"/>
                </button>
            </td>
            <td>$ <span>{itemSale.precio}</span></td>
        </tr>
    );
}