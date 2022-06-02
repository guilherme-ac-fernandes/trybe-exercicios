import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      redCar: false, 
      blueCar: false, 
      yellowCar: false,
      signalColor: 'red'
    }
  }

  moveCar = (color, bool) => {
    this.setState({ [`${color}Car`]: bool });
  }

  changeSignal = (color) => {
    this.setState({ signalColor: color });
  }

  render() {
    const contextValue = {
      redCar: this.state.redCar, 
      blueCar: this.state.blueCar, 
      yellowCar: this.state.yellowCar,
      signalColor: this.state.signalColor,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }
    return (
      <div className="container">
        <MyContext.Provider value={ contextValue } >
          <Cars />
          <TrafficSignal />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
