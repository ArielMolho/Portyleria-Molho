import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons';

const { getPosts } = require('../../services/postService');

export default function ItemCategoryContainer() {
    let {categoryId} = useParams();
    
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     getPosts()
    //         .then(res => setData(res))
    // },[])

    // const dataCategory = data.filter(function(item){
    //     return item.Categoria === categoryId;
    // })
    useEffect(() => {
        getPosts()
            .then(res => setData(
                res.filter(function(item){
                    return item.Categoria === categoryId;
                })
                ))
    },[categoryId])

    
    return (
        <div>
            <div className="header-greeting">
                <p className="header-text">Bienvenid@!</p>
                <p className="header-text">Tentate con nuestros Porty Box! Ideales para compartir al aire libre.</p>
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

/*
                <ItemList dataInput={dataCategory}/>
*/