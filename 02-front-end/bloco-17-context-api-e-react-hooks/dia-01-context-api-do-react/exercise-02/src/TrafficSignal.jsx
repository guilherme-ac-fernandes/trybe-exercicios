import React from 'react';
import MyContext from './MyContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  return (
    <div>
      <MyContext.Consumer>
        { ({signalColor, changeSignal}) => (
          <section>
            <div className="button-container">
            <button onClick={() => changeSignal('red')} type="button">
              Red
            </button>
            <button onClick={() => changeSignal('yellow')} type="button">
              Yellow
            </button>
            <button onClick={() => changeSignal('green')} type="button">
              Green
            </button>
          </div>
          <img className="signal" src={renderSignal(signalColor)} alt="" />
          </section>
        )}
      </MyContext.Consumer>
    </div>
  );
};

export default TrafficSignal;
