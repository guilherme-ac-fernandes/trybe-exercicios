import React from 'react';
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
    }
  }

  moveCar = (color, bool) => {
    this.setState({ [`${color}Car`]: bool });
  }
  render() {
    const contextValue = {
      redCar: this.state.redCar, 
      blueCar: this.state.blueCar, 
      yellowCar: this.state.yellowCar,
      moveCar: this.moveCar,
    }
    return (
      <MyContext.Provider value={ contextValue } >
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
