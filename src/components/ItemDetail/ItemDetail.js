import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({data}) {
  return (
    <div>
      <div className="card">
      <img src={data.thumbnail} className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">Precio: $ {data.price}</p>
        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
          Detalles del producto
        </button>
      </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{data.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="card-text">
              Cajita de 6 muffin decoración simple.
              <br/>
              Ideales para acompañar tus mesas o para obsequiar.
              <br/>
              Sabor bizcocho chocolate vainilla o marmolado todos con chips de chocolate.
              </p>
              <p className="card-text">Precio: $ {data.price}</p>
            </div>
            <div>
              <img src={data.thumbnail} className="card-img-top" height="200px" alt={data.title}/>
            </div>
            <div>
              <ItemCount/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
La descripción la ingresé manual porque la API de MELI que usamos en clase no tiene este campo
y lo saqué de la publicación directamente para que haya contenido.
*/