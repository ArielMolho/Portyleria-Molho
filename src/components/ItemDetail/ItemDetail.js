import React, { useState, useContext } from "react";
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

export default function ItemDetail({data}) {
  const { addToCart } = useContext(CartContext);
  
  const [show, setShow] = useState(true);
  let cantidadCompra;

  function addButton (cantidad){
    setShow({
      hidden: true
    });
    cantidadCompra = cantidad;
    
    productSelected();
  }
  
  function productSelected(){
    const newItem = {
      id: data.id,
      categoria: data.category,
      tipo: data.title,
      precio: data.price,
      cantidad: cantidadCompra
    };
    addToCart(newItem);
  }

  let history = useHistory();

  return (
    <div className="card mb-3 w-100 card-details">
      <div className="row no-gutters">
          <div className="col-md-6">
              <img src={data.image} className="card-img-top" alt={data.category} />
          </div>
          <div className="col-md-6">
              <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text">Precio: $ {data.price}</p>
              </div>
              <div>
                  <ItemCount finalizar={addButton}/>
                  <button hidden={!show.hidden} id="button-finalizar" type="button" className="btn btn-warning"
                  onClick={() => history.push(`/cart`)}>Ver Carrito</button>
              </div>
          </div>
      </div>
    </div>
  )
}