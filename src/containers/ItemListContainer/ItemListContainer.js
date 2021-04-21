import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import datajson from '../../assets/data/data.json';

export default function ItemListContainer({name, greeting}) {
    const [data, setData] = useState([]);

    new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(datajson);
            console.log('2 seconds delay for test')
        }, 2000);
    })
    .then(res=> setData(res))

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

/*
    new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(datajson);
            console.log('2 seconds delay for test')
        }, 2000);
    })
    .then(res=> setData(res))

    useEffect(() => {
        setTimeout(() => {
            setData(datajson);
            console.log('2 seconds delay for test')
        }, 2000);
    }, []);

*/