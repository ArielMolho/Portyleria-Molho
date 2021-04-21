import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import datajson from '../../assets/data/data.json';

export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setItems(datajson);
            console.log('2 seconds delay for test')
        }, 2000);
    }, []);

    return(
        <div>
            <h2 className="header">Productos</h2>
            <div className="d-flex flex-md-row justify-content-around flex-wrap">
            { items.map((data) => (
                <ItemDetail key={data.id} data={data} />
            ))}
            </div>
        </div>
    )
}