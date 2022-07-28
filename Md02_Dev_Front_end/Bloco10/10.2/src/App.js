import './App.css';
import React from 'react';
import data from './data';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {

    return (
      <div className = "App">
        <h1>Pokedex</h1>
        <Pokedex pokeData={ data } />
      </div>
    )
  }
}

export default App;
