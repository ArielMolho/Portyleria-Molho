import React from 'react'
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
//import ItemDetail from '../ItemDetail/ItemDetail';

export default function Item({data}) {
    return (
        <div>
            <div className="card">
                <img src={data.Img} className="card-img-top" alt={data.Categoria} />
                <div className="card-body">
                    <h5 className="card-title">{data.Tipo}</h5>
                    <p className="card-text">Precio: $ {data.Precio}</p>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                        Detalles del producto
                    </button>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{data.Tipo}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="card-text">{data.Descripción}</p>
                            <p className="card-text">Precio: $ {data.Precio}</p>
                        </div>
                        <div>
                            <img src={data.Img} className="card-img-top" alt={data.Categoria} />
                        </div>
                        <div>
                            <ItemCount producto={data.Tipo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
<Link to={`/item/:id`}>Detalles del producto</Link>
<ItemDetail imagen={data.img} precio={data.Precio} categoria={data.Categoria} descripcion={data.Descripción} tipo={data.Tipo} />

        <div>
            <div className="card">
                <img src={data.Img} className="card-img-top" alt={data.Categoria} />
                <div className="card-body">
                    <h5 className="card-title">{data.Tipo}</h5>
                    <p className="card-text">Precio: $ {data.Precio}</p>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                        Detalles del producto
                    </button>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{data.Tipo}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="card-text">{data.Descripción}</p>
                            <p className="card-text">Precio: $ {data.Precio}</p>
                        </div>
                        <div>
                            <img src={data.Img} className="card-img-top" alt={data.Categoria} />
                        </div>
                        <div>
                            <ItemCount producto={data.Tipo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
*/