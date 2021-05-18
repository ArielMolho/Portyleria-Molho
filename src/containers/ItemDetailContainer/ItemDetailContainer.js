import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import {useParams, Link} from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading';

const { getPostById } = require('../../services/postService');

export default function ItemDetailContainer() {
    let {itemId} = useParams();
    
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getPostById(itemId)
            .then(res => setData(res));
        const timer = setTimeout(() => {
            setIsLoading(true);
        }, 500);
        return () => clearTimeout(timer);
    },[itemId])

    return(
        <div className="item-body">
            <h2 className="header-detalle">Detalle de Producto</h2>
            <div className="d-flex flex-md-row justify-content-around flex-wrap item-wrapper">
                {isLoading ? <ItemDetail data={data[0]}/> : <Loading />}
            </div>
            <button type="button" className="return-button btn btn-warning">
                <Link to={`/products`} className="link-text">Volver a Productos</Link>
            </button>
        </div>
    )
}