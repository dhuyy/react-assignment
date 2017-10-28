import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import promise from 'redux-promise';

const finalCreateStore = applyMiddleware(promise)(createStore);

export function configureStore() {
  return finalCreateStore(rootReducer);
};
