import React, { useState } from "react";
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

export default function ItemDetail({img, categoria, tipo, descripción, precio}) {
  const [show, setShow] = useState(true);
  
  function buttonFinalizar (){
    setShow(!show);
    //agregar que tome la cantidad de productos agregados
  }

  const sendCarrito= {
    img: img,
    categoria: categoria,
    tipo: tipo,
    descripción: descripción,
    precio: precio
  }
  console.log(sendCarrito);

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
                  {!show &&
                    <button id="button-finalizar" type="button" className="btn btn-warning">
                      <Link to={`/cart`} className="link-text">Finalizar Compra</Link>
                    </button>
                  }
              </div>
          </div>
      </div>
    </div>
  )
}

/*
onClick={() => {setShow(!show);}

$(document).ready(function () {
  $("#button-finalizar").hide();
});

function hideButtonFinalizar() {
  var x = document.getElementById("#button-finalizar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};
*/