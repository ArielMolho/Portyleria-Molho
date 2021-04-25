import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
//import datajson from '../../assets/data/data.json';
const { getPosts } = require('../../services/postService');

export default function ItemListContainer({name, greeting}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getPosts()
            .then(res => setData(res))
    },[])
    // new Promise((resolve, reject) => {
    //     resolve(datajson); 
    // })
    // .then(res=> setData(res))

    return(
        <div>
            <div className="header">
                <p className="header-text">{greeting}</p>
                <p className="header-text">Tentate con nuestros <span className="header-portybox">{name}</span>! Ideales para compartir al aire libre.</p>
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
*/