import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import renderWithRedux from './helpers/renderWithRedux';
import App from './App';

describe('Verifica o comportamento da aplicação em relação', () => {
  it('avalia a renderização do componente App com store próprio', () => {
    renderWithRedux(<App />);

    const listItem = screen.queryAllByRole('listitem');
    expect(listItem).toHaveLength(0);
  });
  
  it('avalia a renderização do componente App', () => {
    renderWithRouterAndRedux(<App />);

    const inputText = screen.getByLabelText(/tarefa/i);
    expect(inputText).toBeInTheDocument();
    
  });
  
  it('a renderização dos componentes na tela', () => {
    renderWithRouterAndRedux(
      <App />, 
      { 
        initialState: {
          reducer: {
            listTodo: [],
            filter: 'all',
            id: 0,
          }
        }
      }
    );

    const inputText = screen.getByRole('textbox', { name: /tarefa/i });
    expect(inputText).toBeInTheDocument();

    const buttonNameArray = [ 
      /adicionar/i, 
      /todos/i, 
      /finalizados/i, 
      /em andamento/i,
    ];

    buttonNameArray.forEach((button) => {
      const buttonElement = screen.getByRole('button', { name: button });
      expect(buttonElement).toBeInTheDocument();
    });
  });

  it('avalia a renderização dos componentes App com store definida', async () => {
    renderWithRouterAndRedux(
      <App />, 
      { 
        initialState: {
          reducer: {
            listTodo: [],
            filter: 'all',
            id: 0,
          }
        }
      }
    );

    const inputText = screen.getByLabelText(/tarefa/i);
    userEvent.type(inputText, 'Fazer exercício');
    const addButton = screen.getByRole('button', { name: /adicionar/i });
    userEvent.click(addButton);
    const firstTask = screen.getByText(/Fazer exercício/i);
    expect(firstTask).toBeInTheDocument();
  });

  it('avalia a renderização das tarefas e o comportamento dos botões de filtro', () => {
    const {debug} = renderWithRouterAndRedux(
      <App />, 
      { 
        initialState: {
          reducer: {
            listTodo: [],
            filter: 'all',
            id: 0,
          }
        }
      }
    );

    const arrayTask = ['Tarefa de casa 1', 'Tarefa de casa 2', 'Tarefa de casa 3', 'Tarefa de casa 4'];
    const inputText = screen.getByLabelText(/tarefa/i);
    const addButton = screen.getByRole('button', { name: /adicionar/i });

    arrayTask.forEach((task) => {
      userEvent.type(inputText, task);
      userEvent.click(addButton);
      expect(screen.getByText(task)).toBeInTheDocument();
    });

    // Clica em uma tarefa
    const tasksOnTheScreen = screen.getAllByText(/tarefa de casa/i);
    expect(tasksOnTheScreen).toHaveLength(arrayTask.length);

    // Click na primeira tarefa
    userEvent.click(tasksOnTheScreen[0]);

    // Click no botão finalizados
    const doneTaskButton = screen.getByRole('button', { name: /finalizados/i });
    userEvent.click(doneTaskButton);

    // Avalia se tem apenas um componente finalizado
    const doneTasksOnTheScreen = screen.getAllByText(/tarefa de casa/i);
    expect(doneTasksOnTheScreen).toHaveLength(1);

    // Click no botão em andamento
    const doingTaskButton = screen.getByRole('button', { name: /em andamento/i });
    userEvent.click(doingTaskButton);

    // Avalia se tem três componente finalizado
    const doingTasksOnTheScreen = screen.getAllByText(/tarefa de casa/i);
    expect(doingTasksOnTheScreen).toHaveLength(3);

    // Click no botão todos
    const allTaskButton = screen.getByRole('button', { name: /todos/i });
    userEvent.click(allTaskButton);

    // Avalia se todas as tarefas aparecem
    const allTasksOnTheScreen = screen.getAllByText(/tarefa de casa/i);
    expect(allTasksOnTheScreen).toHaveLength(arrayTask.length);
  });
});
