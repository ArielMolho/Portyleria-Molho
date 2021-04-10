import React from 'react';
import './NavBar.css';
import logo from '../../assets/images/Portyleria-Logo.jpg';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={logo} className="navbar-logo" width="100" height="100" alt="Portyleria" loading="lazy"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <div className="d-flex justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PortyBox</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}