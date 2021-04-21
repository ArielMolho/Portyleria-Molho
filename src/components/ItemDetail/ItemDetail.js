import React from 'react'

export default function ItemDetail({data}) {
  return (
    <div>
      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
        {data.Categoria}
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{data.Categoria}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="card-text">{data.Tipo}</p>
              <p className="card-text">Precio: $ {data.Precio}</p>
            </div>
            <div>
              <img src={data.Img} className="card-img-top" height="200px" alt={data.Categoria}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
