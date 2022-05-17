import { combineReducers } from 'redux';
import postsBySubreddit from '../reducers/postsBySubreddit';
import selectedSubreddit from '../reducers/selectedSubreddit';

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
});

export default rootReducer;
