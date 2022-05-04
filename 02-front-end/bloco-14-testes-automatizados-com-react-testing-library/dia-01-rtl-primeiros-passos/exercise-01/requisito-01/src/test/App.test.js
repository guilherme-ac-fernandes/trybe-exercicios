import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a App.js', () => {
  test('Verificando se o label e o input existem no documento', () => {
    render(<App />);
    const labelTask = screen.getByText('Tarefa:');
    const inputTask = screen.getByLabelText('Tarefa:');

    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    expect(inputTask.type).toBe('text');
  });

  test('Verificando se o botão Adicionar contém o valor correto e está presente na página', () => {
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
  test('Verifica se ao adicionar uma tarefa, ela é adicionada a lista presente na página', () => {
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
