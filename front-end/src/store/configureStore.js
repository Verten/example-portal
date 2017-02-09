import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'


const finalCreateStore = compose(
  applyMiddleware(routerMiddleware),
  applyMiddleware(thunk, createLogger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
