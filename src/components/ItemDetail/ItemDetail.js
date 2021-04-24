import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({imagen, precio, categoria, descripcion, tipo}) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={imagen} className="card-img" alt={categoria}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{tipo}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">Precio: $ {precio}</p>
          </div>
          <div>
            <ItemCount producto={tipo}/>
          </div>
        </div>
      </div>
    </div>
  )
}
