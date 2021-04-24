import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
//import datajson from '../../assets/data/data.json';

export default function ItemDetailContainer() {
    const [items, setItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=muffins&limit=1`)
                .then(response => response.json())
                .then(data => setItem(data.results));
        };

        const timer = setTimeout(() => {
            fetchData();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <div>
            <h2 className="header">PortyBox</h2>
            <div className="d-flex flex-md-row justify-content-around flex-wrap">
            { items.map((data) => (
                <ItemDetail key={data.id} data={data} />
            ))}
            </div>
        </div>
    )
}

/*
            { items.map((data) => (
                <ItemDetail key={data.id} data={data} />
            ))}
        


    new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(datajson);
            
        }, 2000);
    })
    .then(res=> setItem(res))

    new Promise((resolve, reject) => { 
        setTimeout(() => {
            useEffect(() => {
                fetch("https://api.mercadolibre.com/sites/MLA/search?q=muffins&limit=1")
                    .then(response => response.json())
                    .then(data => setPosts(data.results));
            }, [])
        }, 2000);
    })
    .then(res=> setItem(res))

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=muffins&limit=1`)
                .then(response => response.json())
                .then(data => setPosts(data.results));
        };

        const timer = setTimeout(() => {
            fetchData();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
*/