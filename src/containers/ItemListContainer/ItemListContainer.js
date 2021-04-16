import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../../components/ItemList/ItemList'

export default function ItemListContainer({name, greeting}) {
    const [number, setNumber] = useState(1);

    function onIncrement(){
        setNumber(number + 1)
    }

    function onDecrement(){
        setNumber(number - 1)
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            console.log('2 seconds delay for test')
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return(
        <div>
            <div className="header">
                <p className="header-text">{greeting}</p>
                <p className="header-text">Tentate con nuestros <a className="header-portybox" href="#">{name}</a>! Ideales para compartir al aire libre.</p>
            </div>
            <div className="item-card">
                <ItemCount number={number} increment={onIncrement} decrement={onDecrement}/>
            </div>
            <div>
                <ItemList postsInput={posts}/>
            </div>
        </div>
    )
}