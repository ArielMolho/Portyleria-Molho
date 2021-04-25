import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({img, categoria, tipo, descripción, precio}) {
  return (
    <div className="card mb-3 w-100">
      <div className="row no-gutters">
          <div className="col-md-6">
              <img src={img} className="card-img-top" alt={categoria} />
          </div>
          <div className="col-md-6">
              <div className="card-body">
                  <h5 className="card-title">{tipo}</h5>
                  <p className="card-text">{descripción}</p>
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
