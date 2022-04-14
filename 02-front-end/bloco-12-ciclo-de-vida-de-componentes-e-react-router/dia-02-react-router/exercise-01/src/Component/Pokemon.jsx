import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render () {
    const { id, name, type, averageWeight: {value, measurementUnit}, image } = this.props.element;
    return (
      <li className="list-item">
        <div className="list-item-text">
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{`Average weight: ${value} ${measurementUnit}`}</p>
          <Link to={`/pokemon/${id}`}>More details</Link>
        </div>
        <img src={image} alt={`Imagem Pokemon: ${name}`} />
      </li>
    );
  }
}

Pokemon.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
}

export default Pokemon;
