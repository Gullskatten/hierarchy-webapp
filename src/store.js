import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import validateKeyReducer from './reducers/validateKeyReducer';
import validateSecretReducer from './reducers/validateSecretReducer';

const middleware = applyMiddleware(logger, thunk);
const rootReducer = combineReducers({
  tokenValidator: validateKeyReducer,
  secretValidator: validateSecretReducer
});

const store = createStore(rootReducer, middleware);

export default store;
