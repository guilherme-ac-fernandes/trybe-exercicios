import React, { Component } from "react";
import data from '../data';
import Pokemon from "../Component/Pokemon";

class PokemonDetails extends Component {
  render() {
    const { id } = this.props.match.params;
    const {checked, handleChange } = this.props;
    const pokemon = data.find((element) => element.id === Number(id));

    return (
      <>
        <div className="pokemon-details-container">
          <Pokemon element={pokemon} checked={ checked }/>
        </div>

        <div className="summary-location-container">
          <h2 className="sumary-location-title">Summary</h2>
          <p>{pokemon.summary}</p>

          <h2 className="sumary-location-title">{`Game Location of ${pokemon.name}`}</h2>
          <div className="location-container">
              {pokemon.foundAt.map((item, index) => (
                <div key={index}>
                  <img src={item.map} alt={item.location} className="location-image" />
                  <p>{item.location}</p>
                </div>
              ))}
          </div>

          <label htmlFor="favorite" className="favorite">
            Is a favorite Pokemon?  
            <input 
              type="checkbox" 
              id="favorite" 
              value={ checked } 
              name="checked" 
              onChange={ handleChange } 
            />
          </label>

        </div>
      </>
    );
  }
}

export default PokemonDetails;
