import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import FavoritePokemon from './Component/FavoritePokemon';
import PokemonDetails from './Component/PokemonDetails';
import NotFound from './Component/NotFound';
import Pokedex from './Component/Pokedex';
import React, { Component } from 'react';
import About from './Component/About';
import types from './dataType';
import data from './data';
import './App.css';

const localStorageKey = 'favorites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonList: data,
      pokemonFavorites: JSON.parse(localStorage.getItem(localStorageKey)) || [], // Podemos retornar o localStorage aqui no estado, mas com a opção de localStorage vazio pode ser resolvido pela operação ou (||) seguido pelo array vazio
    };
  };

  onChangeFavorite = (pokemon, isFavorite) => {
    // Primeiro cenário - pokemon não está na lista de favoritos
    if (!isFavorite) {
      this.setState((prev) => {
        const newFavorite = [...prev.pokemonFavorites, pokemon];
        localStorage.setItem(localStorageKey, JSON.stringify(newFavorite)); // JSON.stringify para transformar em string o valor para o localStorage
        return {
          pokemonFavorites: newFavorite,
        }
      })
    } else {
      // Segundo cenário - pokemon necessita ser removido da lista de favoritos
      this.setState((prev) => {
        // o filter retorna todos os pokemon que não seja o presente como parâmetro
        const filterPokemon = prev.pokemonFavorites.filter((pok) => pok.id !== pokemon.id);
        localStorage.setItem(localStorageKey, JSON.stringify(filterPokemon));
        return {
          pokemonFavorites: filterPokemon,
        }
      }) 
    }
  }

  render() {
    const { pokemonList, pokemonFavorites } = this.state;
    return (
      <BrowserRouter>
        <section className='section'>
          <header className="header">
            <h1>Pokedex</h1>
          </header>
          <nav>
            <ul className="links-container">
              <li><Link to="/" className="link">Home</Link></li>
              <li><Link to="/about" className="link">About</Link></li>
              <li><Link to="/favorite-pokemon" className="link">Favorite Pokemon</Link></li>
            </ul>
          </nav>
          <main className="main">
            <Switch>
              <Route path="/pokemon/:id" render={(props) => 
                <PokemonDetails { ...props } data={ pokemonList } favorites={ pokemonFavorites } onChangeFavorite={ this.onChangeFavorite } />} />
              <Route path="/about" component={ About }/>
              <Route path="/favorite-pokemon" > <FavoritePokemon favorites={ pokemonFavorites } /> </Route>
              <Route exact path="/" ><ul><Pokedex data={ pokemonList } types={ types } favorites={ pokemonFavorites } /></ul></Route>
              <Route path="*" component={ NotFound }/>
              {/* Utilização de * para página não encontrada proveniente do KindaCode (link: https://www.kindacode.com/article/react-router-dom-implement-a-not-found-404-route/) */}
            </Switch>
          </main>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
