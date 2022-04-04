import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li className='list-item'>{value}</li>
  );
}

function App() {
  const listTask = ['Acordar', 'Tomar Banho', 'Almoçar', 'Estudar matéria do dia', 'Fazer exercícios', 'Jantar', 'Dormir'];
  return (
    <main className='main'>
      <h2 className='title'>Lista de Tarefas</h2>
      <ul className='list'>{listTask.map((element) => Task(element)) }</ul>
    </main>
    
  );
}

export default App;
