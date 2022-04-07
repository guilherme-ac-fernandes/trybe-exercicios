import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  
  constructor(props) {
    super()
    this.state = {
      pokemonIndex: 0
    }
  }
  
  render() {
    console.log(this);
    return (
      <div className="pokedex">
        {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;