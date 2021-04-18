// este componente no será usado en la versión final
import React from 'react';
import './ItemCount.css';
import alfajor from '../../assets/images/portyleria-alfajores.png';

export default function ItemCount ({number, increment, decrement}) {
    return(
        <div className="card">
            <img src={alfajor} className="card-img-top" alt="Alfajor"/>
            <div className="card-body">
                <h5 className="card-title">Alfajor</h5>
                <p className="card-text">Alfajor de dulce de leche bañado en chocolate.</p>
                <p className="card-text">Valor por unidad: $ 70.</p>
            </div>
            <div className="card-body d-flex justify-content-between">
                {
                    number > 0 ? <button onClick={decrement} className="btn btn-danger">-</button> : <button onClick={decrement} className="btn btn-danger" disabled>-</button>
                }
                <p className="visual align-self-center">{number}</p>
                {
                    number < 5 ? <button onClick={increment} className="btn btn-primary">+</button> : <button onClick={increment} className="btn btn-primary" disabled>+</button>
                }
                
            </div>
            <div className="card-body text-center">
                {
                    number < 5 ? <button onClick={increment} className="btn btn-success">Agregar al carrito</button> : <button onClick={increment} className="btn btn-success" disabled>Agregar al carrito</button>
                }
            </div>
        </div>
    )
}