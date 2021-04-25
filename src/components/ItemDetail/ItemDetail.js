import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({data}) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={data.Img} className="card-img" alt={data.Categoria} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.Tipo}</h5>
            <p className="card-text">{data.Descripción}</p>
            <p className="card-text">Precio: $ {data.Precio}</p>
          </div>
          <div>
            <ItemCount producto={data.Tipo}/>
          </div>
        </div>
      </div>
    </div>
  )
}
