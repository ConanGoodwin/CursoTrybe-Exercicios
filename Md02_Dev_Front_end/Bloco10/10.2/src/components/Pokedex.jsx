import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      filtro: "",
      nome: "",
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleOnClick = ({ target }) => {
    console.log("oi");
    // this.setState({ [target.name]: target.innerText })
  }

  render() {
    const pokeData = this.props.pokeData;
    let filterData = pokeData.filter(({ type }) => type.includes(this.state.filtro));
    filterData = filterData.filter(({ name }) => name.includes(this.state.nome));

    return (
      <section>
        <div onClick={ this.handleOnClick }>
          Filtro por Tipo: <input type="text" name="filtro" onChange={ this.handleChange } />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {filterData.map((item) => <Pokemon key={item.id} pokemon={item} name="filtro" handleOnClick={ this.handleOnClick } handleChange={ this.handleChange } valor={ this.state.nome }/>)}
        </div>
      </section>
    );
  }
}

export default Pokedex;