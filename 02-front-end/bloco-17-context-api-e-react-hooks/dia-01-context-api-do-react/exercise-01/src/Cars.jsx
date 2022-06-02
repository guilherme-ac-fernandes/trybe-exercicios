import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './MyContext';

function Cars() {
  return (
    <div>
      <MyContext.Consumer>
        { (value) => (
          <section>
            <div>
              <img
                className={value.redCar ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car" />
              <button
                onClick={() => value.moveCar('red', !value.redCar)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={value.blueCar ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car" />
              <button
                onClick={() => value.moveCar('blue', !value.blueCar)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={value.yellowCar ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car" />
              <button
                onClick={() => value.moveCar('yellow', !value.yellowCar)}
                type="button"
              >
                Move
              </button>
            </div>
          </section>
        )}
      </MyContext.Consumer>
    </div>
  );
}

export default Cars;
