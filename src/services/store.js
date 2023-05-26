// import { createStore, compose, applyMiddleware  } from 'redux';
// import thunk from 'redux-thunk';
// import { allReducers } from "./reducers/order";
import { createStore, compose } from 'redux';
import { reducer } from './reducers/reducer';

//расширение для Redux Devtools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers();
//const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(reducer, enhancer);