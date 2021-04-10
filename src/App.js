import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

class App extends React.Component {
  render(){
    return (
      <div className="nav-div">
        <NavBar />
        <ItemListContainer greeting="Bienvenid@!" name="PortyBox"/>
      </div>
    )
  }
}

export default App;
