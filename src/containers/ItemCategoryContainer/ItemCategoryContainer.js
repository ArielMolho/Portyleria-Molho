import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const { getPostByCategory } = require('../../services/postService');

export default function ItemCategoryContainer() {

    let {categoryId} = useParams();
    
    const [data, setData] = useState({ Categoria: "",Tipo: "", Precio: "",Descripción: "", Img: ""});

    useEffect(() => {
        getPostByCategory(categoryId)
            .then(res => setData(res))
    },[categoryId])

    return (
        <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Alfajores</button>
                <button type="button" className="btn btn-secondary">Muffins</button>
                <button type="button" className="btn btn-secondary">Cookies</button>
                <button type="button" className="btn btn-secondary">Scons</button>
                <button type="button" className="btn btn-secondary">Pasta Frolas</button>
                <button type="button" className="btn btn-secondary">Porty Box</button>
            </div>
        </div>
    )
}
