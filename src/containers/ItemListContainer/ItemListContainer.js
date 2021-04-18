import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
//import ItemCount from '../../components/ItemCount/ItemCount'; //Este elemento no será usado en la versión final
import ItemList from '../../components/ItemList/ItemList';
import datajson from '../../assets/data/data.json';

export default function ItemListContainer({name, greeting}) {
    /*esta funciones corresponden a desafío 5 y serán eliminadas ya que ahora están dentro de ItemList.js
    const [number, setNumber] = useState(1);

    function onIncrement(){
        setNumber(number + 1)
    }

    function onDecrement(){
        setNumber(number - 1)
    }*/

    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setData(datajson);
            console.log('2 seconds delay for test')
        }, 2000);
    }, []);

    return(
        <div>
            <div className="header">
                <p className="header-text">{greeting}</p>
                <p className="header-text">Tentate con nuestros <a className="header-portybox" href="#">{name}</a>! Ideales para compartir al aire libre.</p>
            </div>
            <div>
                <ItemList dataInput={data}/>
            </div>
        </div>
    )
}

/*Elemento que no será usado
            <div className="item-card">
                <ItemCount number={number} increment={onIncrement} decrement={onDecrement}/>
            </div>
*/