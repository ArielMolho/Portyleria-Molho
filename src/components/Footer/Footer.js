import React from 'react';
import './Footer.css';
import logo from '../../assets/images/Portyleria-Logo.jpg';
import {NavLink} from 'react-router-dom';

export default function Footer () {
    return(
        <footer>
            <div className="row">
                <div className="d-flex flex-row justify-content-around align-items-center footer">
                    <div className="p-2">
                        <NavLink to={`/`} className="navbar-brand">
                            <img src={logo} className="navbar-logo" width="200" height="200" alt="Portyleria" loading="lazy"/>
                        </NavLink>
                    </div>
                    <div className="p-2">
                        <NavLink to={`/products`} className="nav-link footer-link">Productos</NavLink>
                    </div>
                    <div className="p-2">
                        <NavLink to={`/carrito`} className="nav-link footer-link">Carrito</NavLink>
                    </div>
                    <div className="p-2">
                        <NavLink to={`/contact`} className="nav-link footer-link">Contacto</NavLink>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="copyright">© Copyright 2021 Portyleria y Ariel Molho - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}