import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons';

const { getPosts } = require('../../services/postService');

export default function ItemCategoryContainer() {
    let {categoryId} = useParams();
    
    const [data, setData] = useState([]);

    useEffect(() => {
        getPosts()
            .then(res => setData(
                res.filter(function(item){
                    return item.category === categoryId;
                })
                ))
    },[categoryId])
    
    return (
        <div>
            <div className="header-greeting">
                <p className="header-text">Bienvenid@!</p>
                <p className="header-text">Tentate con nuestros <Link to={`/products/porty-box`} className="header-portybox">Porty Box</Link>! Ideales para compartir al aire libre.</p>
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