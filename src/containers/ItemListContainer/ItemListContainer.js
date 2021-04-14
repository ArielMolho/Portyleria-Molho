import React, {useState} from 'react';
import './ItemListContainer.css';
import ItemCount from '../../components/ItemCount/ItemCount';

export default function ItemListContainer({name, greeting}) {
    const [number, setNumber] = useState(1);

    function onIncrement(){
        setNumber(number + 1)
    }

    function onDecrement(){
        setNumber(number - 1)
    }
    return(
        <div>
            <div className="header">
                <p className="header-text">{greeting}</p>
                <p className="header-text">Tentate con nuestros <a className="header-portybox" href="#">{name}</a>! Ideales para compartir al aire libre.</p>
            </div>
            <div className="item-card">
                <ItemCount number={number} increment={onIncrement} decrement={onDecrement}/>
            </div>
        </div>
    )
}