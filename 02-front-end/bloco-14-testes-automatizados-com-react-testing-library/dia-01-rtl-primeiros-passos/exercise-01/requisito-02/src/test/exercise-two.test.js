import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring

    const inputTask = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');

    // Solução para apenas um elemento do array listTodo
    // userEvent.type(inputTask, listTodo[0]);
    // expect(screen.queryByText(listTodo[0])).not.toBeInTheDocument();
    // userEvent.click(button);
    // expect(screen.queryByText(listTodo[0])).toBeInTheDocument();

    // Solução para todos os itens do array
    listTodo.forEach((item) => {
      userEvent.type(inputTask, item);
      expect(screen.queryByText(item)).not.toBeInTheDocument();
      userEvent.click(button);
      expect(screen.queryByText(item)).toBeInTheDocument();
    })
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content='Jogar Pokémon Arceus'/>);
    expect(screen.getByText('Jogar Pokémon Arceus')).toBeInTheDocument();
  });
});
