import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from './reducers/reducer';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas/sagas';

//подключение Redux-saga
export const sagaMiddleware = createSagaMiddleware();

//расширение для Redux Devtools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(reducer, enhancer);
sagaMiddleware.run(rootSaga);

