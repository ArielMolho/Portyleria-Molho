import React from 'react';
import logo from './Portyleria-Logo.jpg';
//<img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Free_logo.svg" width="30" height="30" alt="Portyleria" loading="lazy"/>
//3-ReactJS\portyleria-molho\src\components\roughLogo.png
//C:\Users\Ari\Documents\ariel\1-Personal\CoderHouse\3-ReactJS\portyleria-molho\src\components\roughLogo.png
function NavBar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={logo} width="50" height="50" alt="Portyleria" loading="lazy"/>
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
                            <a className="nav-link" href="#">Promociones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}  

export default NavBar;