import React, { useState } from "react";
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
//import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function ItemDetail({img, categoria, tipo, descripción, precio}) {
  const sendCarrito= {
    categoria: categoria,
    tipo: tipo,
    descripción: descripción,
    precio: precio,
  }

  const [show, setShow] = useState(true);
  let cantidadCompra;

  function buttonFinalizar (cantidad){
    setShow({
      hidden: true
    });
    cantidadCompra = cantidad;
    console.log(cantidadCompra);
    sendCarrito.cantidad = cantidadCompra;
    console.log(sendCarrito);
  }

  let history = useHistory();

  return (
    <div className="card mb-3 w-100 card-details">
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
                  <ItemCount producto={tipo} finalizar={buttonFinalizar}/>
                  <button hidden={!show.hidden} id="button-finalizar" type="button" className="btn btn-warning"
                  onClick={() => history.push({pathname: `/cart`, state: {cart: {sendCarrito} }})}>
                  Finalizar Compra</button>
              </div>
          </div>
      </div>
    </div>
  )
}

/*
                  {!show &&
                    <button id="button-finalizar" type="button" className="btn btn-warning">
                      <Link to={{
                        pathname: `/cart`,
                        //cart: {addCart}
                        state: { cart: {addCart} }
                      }} 
                      className="link-text">Finalizar Compra</Link>
                    </button>
                  }
                  {!show ?
                    <button id="button-finalizar" type="button" className="btn btn-warning"
                    onClick={() => history.push({pathname: `/cart`, state: {cart: {sendCarrito} }})}>
                    Finalizar Compra</button>
                    : <button id="button-finalizar" type="button" className="btn btn-warning"
                    onClick={() => history.push({pathname: `/cart`, state: {cart: {sendCarrito} }})}>
                    Finalizar Compra</button>
                  }

*/