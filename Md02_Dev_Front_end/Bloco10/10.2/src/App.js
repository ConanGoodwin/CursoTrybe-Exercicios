import './App.css';
import data from './data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className = "App">
      <h1>Pokedex</h1>
      <Pokedex pokeData={ data } />
    </div>

  );
}

export default App;
