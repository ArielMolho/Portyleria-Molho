import React from "react";
import lemonies from '../../assets/images/portyleria-lemonies.jpg';
import portybox2 from '../../assets/images/portyleria-portybox2.jpg';
import portybox3 from '../../assets/images/portyleria-portybox3.jpg';
import torta from '../../assets/images/portyleria-torta.jpg';
import './HomePageContainer.css';
import {Link} from 'react-router-dom';

export default function HomePageContainer() {
    return(
        <div>
            <div className="d-flex flex-row mt-3">
                <img src={portybox2} className="d-block w-25 h-25" alt="PortyBox"/>
                <img src={portybox3} className="d-block w-25 h-25" alt="PortyBox"/>
                <img src={lemonies} className="d-block w-25 h-25"  alt="Lemonies"/>
                <img src={torta} className="d-block w-25 h-25"  alt="Torta"/>
            </div>
            <div className="card w-50 mx-auto mt-5 mb-5 home-card">
                <div className="card-body">
                    <h5 className="card-title text-center home-card-title">Hola! soy Romi Portillo</h5>
                    <p className="card-text home-card-text">Bienvenid@s a Portyleria. Mi emprendimiento personal de pasteleria con amor.</p>
                    <p className="card-text home-card-text">Te invito a que descubras nuestros productos o me contactes por pedidos especiales.</p>
                </div>
                <div className="card-body d-flex flex-row justify-content-around align-items-center">
                    <button type="button" className="btn btn-secondary">
                        <Link to={`/products`} className="home-link">Productos</Link>
                    </button>
                    <button type="button" className="btn btn-secondary">
                        <Link to={`/contact`} className="home-link">Contacto</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}