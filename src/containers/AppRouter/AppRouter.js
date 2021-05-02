import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Home from '../HomePage/HomePageContainer';
import Products from '../ProductPage/ProductPageContainer';
import ItemCategoryContainer from '../ItemCategoryContainer/ItemCategoryContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Contact from '../ContactPage/ContactPageContainer';
import Footer from '../../components/Footer/Footer';
import CartPageContainer from '../CartPage/CartPageContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import { useContext } from 'react';
// import { CartContext } from '../../context/cartContext';

export default function AppRouter() {
    // const { data } = useContext(CartContext);
    // console.log(data) //sólo para probar que lo lee.
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/products">
                    <Products/>
                </Route>
                <Route path="/products/:categoryId">
                    <ItemCategoryContainer />
                </Route>
                <Route path="/item/:itemId">
                    <ItemDetailContainer />
                </Route>
                <Route path="/cart">
                    <CartPageContainer/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}
