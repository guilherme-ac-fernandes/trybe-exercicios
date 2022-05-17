import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

// Resolução do exercício proveniente do course da Trybe (sourse: https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/react-com-redux-parte-2/solutions/1c0aaaf2-dd2d-4a0f-9a7e-513c21121780/a-game-of-thunks-quer-dizer-of-thrones/364a3bc9-4889-424f-bc51-1b1ac99a2813?use_case=calendar)
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
