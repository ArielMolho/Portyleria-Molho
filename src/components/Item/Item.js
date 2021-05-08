import React from 'react'
import './Item.css';
import {useHistory} from 'react-router-dom';

export default function Item({data}) {
    let history = useHistory();
    return (
        <div>
            <div className="card item-card">
                <img src={data.image} className="card-img-top" alt={data.category} />
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title mb-auto">{data.title}</h5>
                    <p className="card-text">Precio: $ {data.price}</p>
                    <button type="button" className="btn btn-success link-text" onClick={() => history.push(`/item/${data.id}`)}>Detalles del producto</button>
                </div>
            </div>
        </div>
    )
}