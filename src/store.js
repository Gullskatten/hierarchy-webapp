import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import validateKeyReducer from './reducers/validateKeyReducer';

const middleware = applyMiddleware(logger, thunk);
const rootReducer = combineReducers({
  validator: validateKeyReducer
});

const store = createStore(rootReducer, middleware);

export default store;
