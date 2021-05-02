import React, {useState} from 'react'
import './ItemCount.css';

export default function ItemCount ({producto, finalizar}) {
    const [number, setNumber] = useState(1);

    function onIncrement(){
        setNumber(number + 1)
    }

    function onDecrement(){
        setNumber(number - 1)
    }

    function addtoCart() {
        console.log (`Se agregaron ${number} unidad/es de ${producto} al carrito`)
        finalizar(number);
    }

    return(
        <div>
            <div className="card-body d-flex justify-content-between">
                {
                    number > 0 ? <button onClick={onDecrement} className="btn btn-danger">-</button> : <button onClick={onDecrement} className="btn btn-danger" disabled>-</button>
                }
                <p className="visual align-self-center">{number}</p>
                {
                    number < 5 ? <button onClick={onIncrement} className="btn btn-primary">+</button> : <button onClick={onIncrement} className="btn btn-primary" disabled>+</button>
                }
            </div>
            <div className="card-body text-center">
                {
                    number > 0 ? <button onClick={addtoCart} className="btn btn-success">Agregar al carrito</button> : <button onClick={addtoCart} className="btn btn-success" disabled>Agregar al carrito</button>
                }
            </div>
        </div>
    )
}