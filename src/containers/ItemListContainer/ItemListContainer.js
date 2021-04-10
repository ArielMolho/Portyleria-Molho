import React from 'react';
import './ItemListContainer.css';

export default function ItemListContainer(props) {
    return(
        <div className="header">
            <p>{props.greeting}</p>
            <p>Tentate con nuestros <a className="header-portybox" href="#">{props.name}</a>! Ideales para compartir al aire libre.</p>
        </div>
    )
}
