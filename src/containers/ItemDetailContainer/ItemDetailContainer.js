import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import {useParams, Link} from 'react-router-dom';

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
                <div className="card mb-3 w-100">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <img src={data.Img} className="card-img-top" alt={data.Categoria} />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">{data.Tipo}</h5>
                                    <p className="card-text">{data.Descripción}</p>
                                    <p className="card-text">Precio: $ {data.Precio}</p>
                                </div>
                                <div>
                                    <ItemCount producto={data.Tipo}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <button type="button" className="return-button btn btn-warning">
                <Link to={`/products`} className="link-text">Volver a Productos</Link>
            </button>
        </div>
    )
}
