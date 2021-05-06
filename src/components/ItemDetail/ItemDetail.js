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
    console.log("el valor que viene de ItemCount es: ", cantidadCompra); //para control
    
    productSelected();
  }
  
  function productSelected(){
    const newItem = {
      id: data.id,
      categoria: data.Categoria,
      tipo: data.Tipo,
      precio: data.Precio,
      cantidad: cantidadCompra
    };
    console.log(newItem);
    addToCart(newItem);
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
                  <ItemCount finalizar={addButton}/>
                  <button hidden={!show.hidden} id="button-finalizar" type="button" className="btn btn-warning"
                  onClick={() => history.push(`/cart`)}>Ver Carrito</button>
              </div>
          </div>
      </div>
    </div>
  )
}