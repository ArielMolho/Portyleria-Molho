import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="nav-div">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
