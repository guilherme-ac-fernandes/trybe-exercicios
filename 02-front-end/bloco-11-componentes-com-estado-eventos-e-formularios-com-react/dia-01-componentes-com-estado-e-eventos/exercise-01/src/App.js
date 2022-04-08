import React from 'react';
import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <section className='section'>
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <main className="main">
        <ul>
          {/* Componente pokedex não recebe mais prop que contem todos os dados */}
          <Pokedex />
        </ul>
      </main>
    </section>
  );
}

export default App;
