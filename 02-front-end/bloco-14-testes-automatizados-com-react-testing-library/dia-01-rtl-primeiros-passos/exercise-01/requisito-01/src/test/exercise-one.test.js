import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    // Validação apenas do botão
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    // Validação do botão através do texto
    const buttonAdd = screen.getByText('Adicionar');
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');
  });

  // Resolução baseada no gabarito presente no course da Trybe (link: https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-primeiros-passos/solutions/74f558d9-391f-4340-935e-8cc1066c16f4/gabarito-dos-exercicios/2ca3ed7f-2300-40da-92ca-310135681c92?use_case=calendar)
  test('Ao clicar no botão Adicionar a taks dever adicionar na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const TASKS_1 = 'Play on the Nintendo Switch';

    const inputTask = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');
    userEvent.type(inputTask, TASKS_1);
    userEvent.click(button);
    // Primeiro buscar o elemento com o texto e avaliar se está presente na página
    expect(screen.queryByText(TASKS_1)).toBeInTheDocument();
  });
});
