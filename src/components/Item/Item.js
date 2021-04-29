import React from 'react'
import './Item.css';
import {Link} from 'react-router-dom';

export default function Item({data}) {
    return (
        <div>
            <div className="card item-card">
                <img src={data.Img} className="card-img-top" alt={data.Categoria} />
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title mb-auto">{data.Tipo}</h5>
                    <p className="card-text">Precio: $ {data.Precio}</p>
                    <button type="button" className="btn btn-success">
                        <Link to={`/item/${data.id}`} className="link-text">Detalles del producto</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}