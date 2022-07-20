import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const pokeData = this.props.pokeData;

    return (
      <section style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {pokeData.map((item) => <Pokemon key={item.id} pokemon={item} />)}
      </section>
    );
  }
}

export default Pokedex;