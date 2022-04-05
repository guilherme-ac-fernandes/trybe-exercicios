import React from 'react';
import Pokemon from './Pokemon';

class Pokedex  extends React.Component {
  render() {
    return (
      <>{this.props.pokemon.map((element) => <Pokemon key={element.id} element={element}/>)}</>
    );
  }
}

export default Pokedex;
