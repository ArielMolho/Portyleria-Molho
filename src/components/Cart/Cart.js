import React, { useState } from "react";
import trash from '../../assets/images/delete.png';

export default function Cart({ itemSale, onRemove }) {
    const [number, setNumber] = useState(itemSale.cantidad);
    console.log(itemSale) //para test

    function onIncrement() {
        setNumber(number + 1);
        changeQuantity(number);
        console.log(itemSale.cantidad);
    }

    function onDecrement() {
        setNumber(number - 1);
        changeQuantity(number);
        console.log(itemSale.cantidad);
    }

    function changeQuantity(number){
        itemSale.cantidad = number;
    }

    var subTotal = itemSale.precio*itemSale.cantidad;

    return (
        <tr>
            <th scope="row">{itemSale.id}</th>
            <td>{itemSale.tipo}</td>
            <td>{itemSale.cantidad}</td>
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
            <td>$ <span>{subTotal}</span></td>
        </tr>
    );
}