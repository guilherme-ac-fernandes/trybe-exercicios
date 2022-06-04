import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }){
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });
  const [signalColor, setSignalColor] = useState('red');

  const moveCar = (car, side) => {
    setCars({ ...cars, [car]: side});
  };

  const changeSignal = (color) => {
    setSignalColor(color);
  }
  
  const contextValue = { cars, moveCar, signalColor, changeSignal };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;