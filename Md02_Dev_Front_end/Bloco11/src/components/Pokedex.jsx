import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      filter: ""
    }
  }

  filterPoke = ({ target }) => {
    this.setState({ filter: target.value });
  };

  render() {
    let pokeData = this.props.pokeData;

    pokeData = pokeData.filter(({ type }) => type.includes(this.state.filter));

    return (
      <div>
        Filtro: <input type="text" onChange={this.filterPoke} />
        <section style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {pokeData.map((item) => <Pokemon key={item.id} pokemon={item} />)}
        </section>
      </div>
    );
  }
};

export default Pokedex;
