import { combineReducers } from 'redux';
import { routerReducer  } from 'react-router-redux'
import userReducer from './user'

const rootReducer = combineReducers(Object.assign({}, {
  userReducer,
  routing: routerReducer,
}));

export default rootReducer;
