import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './reducers/authReducer';

const middleware = applyMiddleware(logger, thunk);

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, middleware);

export default store;
