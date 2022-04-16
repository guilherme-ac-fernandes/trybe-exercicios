import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render () {
    const { id, name, type, averageWeight: {value, measurementUnit}, image } = this.props.element;
    const { isFavorite } = this.props;
    
    return (
      <li className="list-item">
        <div className="list-item-text">
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{`Average weight: ${value} ${measurementUnit}`}</p>
          <Link to={`/pokemon/${id}`}>More details</Link>
        </div>
        <img src={image} alt={`Imagem Pokemon: ${name}`} />
        <div className="div-star-container">
          {isFavorite && <img src="https://cdn.pixabay.com/photo/2016/03/31/14/48/star-1292832_1280.png" alt="star favorite" className="star-image" />}
        </div>
        
      </li>
    );
  }
}

Pokemon.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.string,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
  checked: PropTypes.bool,
}

export default Pokemon;
