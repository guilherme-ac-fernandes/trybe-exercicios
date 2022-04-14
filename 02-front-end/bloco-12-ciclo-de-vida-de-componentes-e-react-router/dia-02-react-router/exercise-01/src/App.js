import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pokedex from './Component/Pokedex';
import PokemonDetails from './Component/PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <section className='section'>
        <header className="header">
          <h1>Pokedex</h1>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <ul>
                <Pokedex />
              </ul>
            </Route>
            <Route 
              path="/pokemon/:id" 
              render={(props) => <PokemonDetails { ...props } />} 
            />
          </Switch>
          
        </main>
      </section>
    </BrowserRouter>
  );
}

export default App;
