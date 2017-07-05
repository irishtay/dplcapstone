import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from './apiMiddleware';
import rootReducer from './reducers/index';
import axios from 'axios';

const validateAction = 'VALIDATE_TOKEN'; 
const customHeaders = ['uid', 'client', 'access-token', 'expiry']
const options = { customHeaders, validateAction, axios }

const enhancers = compose(
  applyMiddleware(thunk, apiMiddleware(options)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, {}, enhancers);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
