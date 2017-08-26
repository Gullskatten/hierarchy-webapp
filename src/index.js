import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './layout/app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import './global/index.css';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
