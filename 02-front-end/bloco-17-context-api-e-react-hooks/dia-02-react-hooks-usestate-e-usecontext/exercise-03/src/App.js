import React from 'react';
import TrafficSignal from './components/TrafficSignal';
import Cars from './components/Cars';
import './App.css';

function App() {
  return (
    <div className="container">
      <Cars />
      <TrafficSignal />
    </div>
  );
}

export default App;
