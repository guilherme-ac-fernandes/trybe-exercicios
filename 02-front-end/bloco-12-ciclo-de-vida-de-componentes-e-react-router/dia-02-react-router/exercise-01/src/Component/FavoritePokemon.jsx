import React, { Component } from "react";
import Pokemon from "./Pokemon";

class FavoritePokemon extends Component {
  
  render() {
    const { favorites } = this.props;
    const validationFavorites = favorites.length === 0;
    return (
      <>
        <h2 className="favorite-title">Favorite Pokemon</h2>
        {validationFavorites && <p className="not-found-favorite">No favorite pokemon found</p> }
        {!validationFavorites && 
          <div className="pokemon-favorite-container">
            {favorites.map((item) => (<Pokemon element={ item } isFavorite={ true } />))} : '' 
          </div>
        }
      </>
    );
  }
}

export default FavoritePokemon;
