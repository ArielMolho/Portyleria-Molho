import React from 'react'
import './Item.css';

export default function Item({data, number, increment, decrement}) {
    console.log(data.Img);
    return (
        <div className="card">
            <img src={`${data.Img}`} className="card-img-top" alt={data.Categoria}/>
            <div className="card-body">
                <h5 className="card-title">{data.Categoria}</h5>
                <p className="card-text">{data.Tipo}</p>
                <p className="card-text">Precio: $ {data.Precio}</p>
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