import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const listTask = ['Acordar', 'Tomar Banho', 'Almoçar', 'Estudar matéria do dia', 'Fazer exercícios', 'Jantar', 'Dormir'];
  return (
    <ul>{listTask.map((element) => Task(element)) }</ul>
  );
}

export default App;
