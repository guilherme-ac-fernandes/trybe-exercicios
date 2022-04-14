import React, { Component } from "react";
import data from '../data';
import Pokemon from "../Component/Pokemon";

class PokemonDetails extends Component {
  render() {
    const { id } = this.props.match.params
    const pokemon = data.find((element) => element.id === Number(id));
    console.log(pokemon)
  
    return (
      <Pokemon element={pokemon}/>
    );
  }
}

export default PokemonDetails;