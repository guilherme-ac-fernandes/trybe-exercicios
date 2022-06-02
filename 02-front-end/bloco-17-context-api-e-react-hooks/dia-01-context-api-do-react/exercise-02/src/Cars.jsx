import React from 'react';
import MyContext from './MyContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  return (
    <div>
      <MyContext.Consumer>
        { ({redCar, blueCar, yellowCar, moveCar }) => (
          <section>
            <div>
              <img
                className={redCar ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button
                onClick={() => moveCar('red', !redCar)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={blueCar ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button
                onClick={() => moveCar('blue', !blueCar)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={yellowCar ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
              />
              <button
                onClick={() => moveCar('yellow', !yellowCar)}
                type="button"
              >
                Move
              </button>
            </div>
          </section>
        ) }
      </MyContext.Consumer>
    </div>
  );
}

export default Cars;