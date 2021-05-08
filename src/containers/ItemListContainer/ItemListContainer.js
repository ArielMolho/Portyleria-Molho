import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons';
import {Link} from 'react-router-dom';

const { getPosts } = require('../../services/postService');

export default function ItemListContainer({name, greeting}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getPosts()
            .then(res => setData(res))
    },[])

    return(
        <div className="product-body">
            <div className="header-greeting">
                <p className="header-text">{greeting}</p>
                <p className="header-text">Tentate con nuestros <Link to={`/products/porty-box`} className="header-portybox">{name}</Link>! Ideales para compartir al aire libre.</p>
            </div>
            <div>
                <CategoryButtons />
            </div>
            <div>
                <ItemList dataInput={data}/>
            </div>
        </div>
    )
}