import React from "react";
import './ItemDetailContainer.css';
import ItemCount from '../../components/ItemCount/ItemCount';

export default function ItemDetailContainer({imagen, precio, categoria, descripcion, tipo}) {
    
    console.log({precio})
    return(
        <div>
            <h2 className="header">PortyBox</h2>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={imagen} className="card-img" alt={categoria}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{tipo}</h5>
                            <p className="card-text">{descripcion}</p>
                            <p className="card-text">Precio: $ {precio}</p>
                        </div>
                        <div>
                            <ItemCount producto={tipo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
import ItemDetail from '../../components/ItemDetail/ItemDetail';

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

*/