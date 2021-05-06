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

/*
DESAFIO 10
Hola Ariel. Esta perfecto el desafio. La parte de agregar y restar cantidad dentro del cart tendrias que hacerlo
tambien modificando la cantidad en el cart del context porque si no apretas "ok" no se guardan los cambios
y si haces cambios, salis del cart y volves perdes los cambios.

>> Consigna: 
Expande tu componente Cart.js con el desglose de la compra, y actualiza tu CartWidget.js para hacerlo reactivo al contexto.
>>Aspectos a incluir en el entregable:
LISTO- Cart.js 
LISTO- Debe mostrar el desglose de tu carrito y el precio total.
LISTO- Debe estar agregada la ruta ‘cart’ al BrowserRouter.
FALTA AGRUPADOS- Debe mostrar todos los ítems agregados agrupados.
LISTO- Por cada tipo de ítem, incluye un control para eliminar ítems.
LISTO- De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo.
LISTO- CartWidget.js.
LISTO- Ahora debe consumir el CartContext y mostrar en tiempo real (aparte del ícono) qué cantidad de ítems están agregados (2 camisas y 1 gorro equivaldrían a 3 items).
LISTO- El cart widget no se debe mostrar más si no hay items en el carrito, aplicando la técnica que elijas (dismount, style, etc).
https://docs.google.com/presentation/d/1phJpywYPwfeeH6Y1O2HYapLyMCKn40P5D6iYyaKL6V4/edit#slide=id.gac8cb6c0c6_0_54
*/
/*
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
      tipo: data.Tipo,
      precio: data.Precio,
      cantidad: cantidadCompra
    };
    console.log(newItem);
    addToCart(newItem);
  }
  
  const { addToCart, count, setCount } = useContext(CartContext);
  
  const [show, setShow] = useState(true);
  

  function addButton (cantidad){
    setShow({
      hidden: true
    });
    setCount(cantidad);
    console.log("el valor que viene de ItemCount es: ", count); //para control
    console.log(count);
    productSelected();
  }
  
  function productSelected(){
    const newItem = {
      id: data.id,
      tipo: data.Tipo,
      precio: data.Precio,
      cantidad: count
    };
    console.log(newItem);
    addToCart(newItem);
  }

*/