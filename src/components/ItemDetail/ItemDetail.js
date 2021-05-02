import React, { useState, useContext } from "react";
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
//import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

export default function ItemDetail({data}) {
  const { cart } = useContext(CartContext);

  // const sendCarrito= {
  //   categoria: data.Categoria,
  //   tipo: data.Tipo,
  //   descripción: data.Descripción,
  //   precio: data.Precio,
  // }

  const [show, setShow] = useState(true);
  let cantidadCompra;

  function buttonFinalizar (cantidad){
    setShow({
      hidden: true
    });
    cantidadCompra = cantidad;
    console.log(cantidadCompra); //para control
    // sendCarrito.cantidad = cantidadCompra;
    // console.log(sendCarrito); //para control
    cart.id = data.id;
    //cart.categoria = data.Categoria;
    cart.tipo = data.Tipo;
    //cart.descripción = data.Descripción;
    cart.precio = data.Precio;
    cart.cantidad = cantidadCompra;
    console.log(cart) //para test
  }
  
  let history = useHistory();

  return (
    <div className="card mb-3 w-100 card-details">
      <div className="row no-gutters">
          <div className="col-md-6">
              <img src={data.Img} className="card-img-top" alt={data.Categoria} />
          </div>
          <div className="col-md-6">
              <div className="card-body">
                  <h5 className="card-title">{data.Tipo}</h5>
                  <p className="card-text">{data.Descripción}</p>
                  <p className="card-text">Precio: $ {data.Precio}</p>
              </div>
              <div>
                  <ItemCount producto={data.Tipo} finalizar={buttonFinalizar}/>
                  <button hidden={!show.hidden} id="button-finalizar" type="button" className="btn btn-warning"
                  onClick={() => history.push(`/cart`)}>
                  Ver Carrito</button>
              </div>
          </div>
      </div>
    </div>
  )
}

/*
                  <button hidden={!show.hidden} id="button-finalizar" type="button" className="btn btn-warning"
                  onClick={() => history.push({pathname: `/cart`, state: {cart: {sendCarrito} }})}>
                  Finalizar Compra</button>
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