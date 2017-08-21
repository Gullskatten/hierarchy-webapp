import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import validateKeyReducer from './reducers/validateKeyReducer';
import validateSecretReducer from './reducers/validateSecretReducer';
import loadingService from './reducers/loadingServiceReducer';

const middleware = applyMiddleware(logger, thunk);
const rootReducer = combineReducers({
  tokenValidator: validateKeyReducer,
  secretValidator: validateSecretReducer,
  loadingService: loadingService
});

const store = createStore(rootReducer, middleware);

export default store;
