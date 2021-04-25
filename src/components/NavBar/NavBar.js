import React from 'react';
import './NavBar.css';
import logo from '../../assets/images/Portyleria-Logo.jpg';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

export default function NavBar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to={`/`} className="navbar-brand">
                <img src={logo} className="navbar-logo" width="100" height="100" alt="Portyleria" loading="lazy"/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <div className="d-flex justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/`} className="nav-link">Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/products`} className="nav-link">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/contact`} className="nav-link">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}