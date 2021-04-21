import React from 'react'
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

export default function Item({data}) {
    return (
        <div className="card h-100">
            <img src={data.Img} className="card-img-top" height="200px" alt={data.Categoria}/>
            <div className="card-body">
                <h5 className="card-title">{data.Categoria}</h5>
                <p className="card-text">{data.Tipo}</p>
                <p className="card-text">Precio: $ {data.Precio}</p>
            </div>
            <div>
                <ItemCount producto={data.Tipo} />
            </div>
        </div>
    )
}