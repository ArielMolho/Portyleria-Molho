import React, { useState } from "react";
import trash from '../../assets/images/delete.png';

export default function Item({ item, onRemove }) {
    const [number, setNumber] = useState(item.cantidad);
    console.log(item) //para test
    function onIncrement() {
        setNumber(number + 1);
        item.Cantidad = number;
        console.log(item.cantidad);
    }

    function onDecrement() {
        setNumber(number - 1);
        item.Cantidad = number;
        console.log(item.cantidad);
    }
    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.tipo}</td>
            <td>{number}</td>
            <td>
                {
                    number < 5 ? <button onClick={onIncrement} className="btn btn-info btn-sm action-button">+</button> : <button onClick={onIncrement} className="btn btn-info btn-sm action-button" disabled>+</button>
                }
                {
                    number > 1 ? <button onClick={onDecrement} className="btn btn-danger btn-sm action-button">-</button> : <button onClick={onDecrement} className="btn btn-danger btn-sm action-button" disabled>-</button>
                }
                <button onClick={() => onRemove(item.id)} className="btn btn-warning btn-sm action-button">
                    <img src={trash} alt="Borrar"/>
                </button>
            </td>
            <td>$ <span>{item.precio}</span></td>
        </tr>
    );
}