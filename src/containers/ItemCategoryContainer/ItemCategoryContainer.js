import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Item from '../../components/Item/Item';
//import ItemList from '../../components/ItemList/ItemList';
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons';

//const { getPostByCategory } = require('../../services/postService');
const { getPosts } = require('../../services/postService');

export default function ItemCategoryContainer() {
    let {categoryId} = useParams();
    
    // const [data, setData] = useState({ Categoria: "",Tipo: "", Precio: "",Descripción: "", Img: ""});

    // useEffect(() => {
    //     getPostByCategory(categoryId)
    //         .then(res => setData(res))
    // },[categoryId])
    const [data, setData] = useState([]);

    useEffect(() => {
        getPosts()
            .then(res => setData(res))
    },[])

    // data.filter(function(item){
    //     return item.Categoria === categoryId;
    // })
    console.log(data)
    return (
        <div>
            <div className="header-greeting">
                <p className="header-text">Bienvenid@!</p>
                <p className="header-text">Tentate con nuestros Porty Box! Ideales para compartir al aire libre.</p>
            </div>
            <div>
                <CategoryButtons dataInput={data}/>
            </div>
            <div>
                <p>listado filtrado por categoria: {categoryId}</p>
                <div className="d-flex flex-md-row justify-content-around flex-wrap">
                    {
                        data.map((data) => { 
                        return (
                            <Item key={data.id} data={data} />
                        )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
/*
            <div>
                <ItemList filter dataInput={data}/>
            </div>
        dataInput.filter(function(item){
            return item.Categoria === "Alfajor";
        })
        https://www.javaer101.com/es/article/2200987.html
*/