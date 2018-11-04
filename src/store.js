import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './scenes/home/duck';

/* eslint-disable no-underscore-dangle */
export default createStore(
  combineReducers({ homeReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
