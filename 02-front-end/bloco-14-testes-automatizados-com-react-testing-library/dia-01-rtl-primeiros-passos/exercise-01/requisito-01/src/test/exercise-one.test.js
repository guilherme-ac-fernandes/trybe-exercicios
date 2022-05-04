import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
  });

  test('Ao clicar no botão Adicionar a taks dever adicionar na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
  });
});
