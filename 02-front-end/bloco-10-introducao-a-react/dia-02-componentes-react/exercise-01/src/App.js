import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import data from './data';

function App() {
  return (
    <section className='section'>
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <main className="main">
        <ul>
          <Pokedex pokemon={data}/>
        </ul>
      </main>
    </section>
  );
}

export default App;
