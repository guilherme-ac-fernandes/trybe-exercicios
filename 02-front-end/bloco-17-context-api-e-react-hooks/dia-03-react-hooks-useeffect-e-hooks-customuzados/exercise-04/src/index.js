import React from 'react';
import { render } from 'react-dom';
import App from './App';
import RedditProvider from './context/RedditProvider';

render(
  <RedditProvider>
    <App />
  </RedditProvider>,
  document.getElementById('root'),
);
