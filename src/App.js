import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

class App extends React.Component {
  render(){
    return (
      <div className="nav-div">
        <NavBar />
        <ItemListContainer greeting="Bienvenid@!" name="PortyBox"/>
        <ItemDetailContainer />
      </div>
    )
  }
}

export default App;
