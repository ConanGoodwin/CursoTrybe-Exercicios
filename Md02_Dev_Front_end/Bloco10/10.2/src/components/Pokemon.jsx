import React from 'react'
import PropTypes from 'prop-types';
import '../css/Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{type}</p>
          <p className="card-text">{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} className="card-img-top" alt={name} />
      </div>
    );
  }
}

Pokemon.propType = {
  name: PropTypes.string.isRequired,
  type:  PropTypes.string.isRequired,
  averageWeight:  PropTypes.string.isRequired,
  image:  PropTypes.string.isRequired
}

export default Pokemon;