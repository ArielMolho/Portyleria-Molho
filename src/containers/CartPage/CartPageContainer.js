import React, {useState, useContext} from "react";
import './CartPageContainer.css';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import CartList from '../../components/CartList/CartList';

export default function CartPageContainer() {
    const { cart } = useContext(CartContext);
    console.log(cart) //para test

    const [list, setList] = useState(cart);

    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }

    return(
        <div>
            <h2 className="header-cart">Carrito de Compras</h2>
            <div>
                <CartList list={list} onRemove={handleRemove} />
            </div>
            <button type="button" className="return-button btn btn-warning">
                <Link to={`/products`} className="link-text">Continuar comprando</Link>
            </button>
        </div>
    )
}

/*
    // const [number, setNumber] = useState(cart.cantidad);

    // function onIncrement(){
    //     setNumber(number + 1)
    //     cart.cantidad = number;
    // }

    // function onDecrement(){
    //     setNumber(number - 1)
    //     cart.cantidad = number;
    // }

    import React, {useEffect} from "react";
    import {Link, useLocation } from 'react-router-dom';

    const location = useLocation();
    
    useEffect(() => {
        let variable = Object.values(location.state.cart)
        console.log(variable);
    }, [location]);

    let post = location.state.cart;
    console.log(post);

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acción</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody id="items">
                        <tr>
                            <th scope="row">{cart.id}</th>
                            <td>{cart.tipo}</td>
                            <td>{number}</td>
                            <td>
                                {
                                    number < 5 ? <button onClick={onIncrement} className="btn btn-info btn-sm action-button">+</button> : <button onClick={onIncrement} className="btn btn-info btn-sm action-button" disabled>+</button>
                                }
                                {
                                    number > 1 ? <button onClick={onDecrement} className="btn btn-danger btn-sm action-button">-</button> : <button onClick={onDecrement} className="btn btn-danger btn-sm action-button" disabled>-</button>
                                }
                                <button onClick={removeItem} className="btn btn-warning btn-sm action-button">
                                    <img src={trash} alt="Borrar"/>
                                </button>
                            </td>
                            <td>$ <span>{cart.precio}</span></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        { cart.id === undefined ? 
                            <tr id="footer-carrito">
                                <th className="empty-cart" scope="row" colSpan="5">Carrito vacío - comience a comprar!</th>
                            </tr>
                        :
                            <tr id="footer-carrito">
                                <th scope="row" colSpan="2">Total productos</th>
                                <td>{}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" id="vaciar-carrito">
                                        Vaciar Codo
                                    </button>
                                </td>
                                <td className="font-weight-bold">$ <span>{}</span></td>
                            </tr>
                        }
                    </tfoot>
                </table>
            </div>
*/