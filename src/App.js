import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/HomePage/HomePageContainer';
import Products from './containers/ProductPage/ProductPageContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Contact from './containers/ContactPage/ContactPageContainer';
import Footer from './components/Footer/Footer';
import Cart from './containers/CartPage/CartPageContainer';
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
          <Route path="/products/:categoryid">
            <Products/>
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    )
  }
}

export default App;

/*

          <Route path="/portybox">
            <PortyBox/>
          </Route>
          
      <Route exact path="/posts">
        <PostsContainer />
      </Route>

      <Route path="/posts/:postId">
        <PostsDetailPageContainer />
      </Route>
*/