import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/HomePage/HomePageContainer';
import Products from './containers/ProductPage/ProductPageContainer';
import ItemCategoryContainer from './containers/ItemCategoryContainer/ItemCategoryContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Contact from './containers/ContactPage/ContactPageContainer';
import Footer from './components/Footer/Footer';
import CartPageContainer from './containers/CartPage/CartPageContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render(){
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
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/cart">
            <CartPageContainer/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    )
  }
}

export default App;