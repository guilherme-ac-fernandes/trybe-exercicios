import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight: {value, measurementUnit}, image } = this.props.element;
    return (
      <li className="list-item">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{`Average weight: ${value} ${measurementUnit}`}</p>
        <img src={image} alt={`Imagem Pokemon: ${name}`} />
      </li>
    );
  }
}

// Resolução da forma de estruturação do PropTypes proveniente da resolução do coourse da Trybe
// source: https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react-gabarito/solutions/cf9a4fee-8e14-4ea8-b8f2-15b3e1bc083f/exercicios-de-fixacao/a8bb99ac-ef40-43ee-99ce-94e4839a077f?use_case=calendar
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