import React from 'react';
import guilherme from '../../public/guilherme-fernandes.jpeg';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-title">
        <h2>Guilherme Augusto do Carmo Fernandes</h2>
        <img src={ guilherme } alt="Guilherme Fernandes" />
        <p>Descrição</p>
        <p>Habilidades</p>
        <a  href="https://github.com/guilherme-ac-fernandes" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    );
  }
}

export default Home;
