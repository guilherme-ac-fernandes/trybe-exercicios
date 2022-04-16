import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Pokedex from './Component/Pokedex';
import About from './Component/About';
import PokemonDetails from './Component/PokemonDetails';
import FavoritePokemon from './Component/FavoritePokemon';
import NotFound from './Component/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      idPosition: [],

    };
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(name, value);

  };

  render() {
    const { checked } = this.state;
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
              <Route path="/pokemon/:id" render={(props) => <PokemonDetails { ...props } handleChange={ this.handleChange } checked={ checked } />} />
              <Route path="/about" component={ About }/>
              <Route path="/favorite-pokemon" > <FavoritePokemon /> </Route>
              <Route exact path="/"><ul><Pokedex checked={ checked } /></ul></Route>
              <Route path="*" component={ NotFound }/>
              {/* Utilização de * para página não encontrada proveniente do Kinda Code (link: https://www.kindacode.com/article/react-router-dom-implement-a-not-found-404-route/) */}
            </Switch>
          </main>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
