import { createStore } from 'redux';
import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import TrafficSignalReducer from './TrafficSignalReducer';

const rootReducer = combineReducers({ carsReducer, TrafficSignalReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
