import React from 'react';
import { render } from 'react-dom';
import { Provider } from './contextAPI/Provider';
import App from './App';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
