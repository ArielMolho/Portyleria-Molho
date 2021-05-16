import React, {useState, useContext} from "react";
import { CartContext } from '../../context/cartContext';
import check from '../../assets/images/checked128px.png';
import {useHistory} from 'react-router-dom';

const { createOrder } = require('../../services/postService');

export default function OrderPageContainer() {
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [orderId, setOrderId] = useState('');

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleEmailChange(event){
        setEmail(event.target.value)
    }

    function handlePhoneChange(event){
        setPhone(event.target.value)
    }

    function placeOrder(event) {
        event.preventDefault()
        const buyer = {
            name: name,
            email: email,
            phone: phone
        };
        createOrder(buyer, cart, totalPrice)
            .then(id => setOrderId(id));
    }

    let history = useHistory();
    function closeAndReset(){
        clearCart();
        history.push(`/`);
    }

    return(
        <div>
            <form className="order-form">
                <p className="form-title">Datos personales:</p>
                <fieldset>
                    <input onChange={handleNameChange} className="form-control mb-3" type="text" placeholder="Ingrese su nombre" required></input>
                    <input onChange={handleEmailChange} className="form-control mb-3" type="text" placeholder="Ingrese su email" required></input>
                    <input onChange={handlePhoneChange} className="form-control mb-3" type="number" placeholder="Ingrese su teléfono de contacto" required></input>
                </fieldset>
                <div className="d-flex justify-content-center">
                    <button onClick={placeOrder} type="submit" className="btn btn-primary mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Confirmar Pedido</button>
                </div>
            </form>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body d-flex flex-column justify-content-center align-items-center">
                            <img src={check} className="mt-3 mb-3" width="150" height="150" alt="check"/>
                            <p className="check-text">Su pedido ha sido confirmado!</p>
                            <p className="check-contact">Código de confirmación: {orderId}</p>
                            <p className="check-contact">En breve estaremos en contacto para coordinar la entrega y el pago.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeAndReset}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}