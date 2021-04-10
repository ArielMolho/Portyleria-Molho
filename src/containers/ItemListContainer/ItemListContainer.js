import React from 'react';
import './ItemListContainer.css';

export default class ItemListContainer extends React.Component{
    render(){
        return(
            <div className="header">
                <p>Tentate con nuestros <a className="header-portybox" href="#">PortyBox</a>! Ideales para compartir al aire libre.</p>
            </div>
        )
    }
}
