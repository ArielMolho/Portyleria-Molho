import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import {useParams, Link} from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const { getPostById } = require('../../services/postService');

export default function ItemDetailContainer() {
    let {itemId} = useParams();
    
    const [data, setData] = useState({ Categoria: "",Tipo: "", Precio: "",Descripción: "", Img: ""});

    useEffect(() => {
        getPostById(itemId)
            .then(res => setData(res))
    },[itemId])
    
    return(
        <div>
            <h2 className="header-detalle">Detalle de Producto</h2>
            <div className="d-flex flex-md-row justify-content-around flex-wrap">
                <ItemDetail categoria={data.Categoria} tipo={data.Tipo} precio={data.Precio} descripción={data.Descripción} img={data.Img} />
            </div>
            <button type="button" className="return-button btn btn-warning">
                <Link to={`/products`} className="link-text">Volver a Productos</Link>
            </button>
        </div>
    )
}