import React from 'react';
import InputTodo from './AddTodo';
import FilterTodos from './componentes/FilterTodos';
import TodoList from './componentes/TodoList';

// Resolução proveniente da resolução do course da Trybe (source: https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/react-com-redux-parte-1/solutions/0ad5e8fa-6b18-4c5c-b854-d7ee4c5731be/rodando-os-exercicios-localmente/5f6ff8fb-512b-498c-b365-05caac8d1b15?use_case=calendar)
const App = () => {
  return (
    <main>
      <InputTodo />
      <FilterTodos />
      <TodoList />
    </main>
  );
}

export default App;
