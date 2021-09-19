import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import EcomApp from './components/ecom-app/EcomApp';
import RouteHandler from './router/RouteHandler';
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteHandler>
        <EcomApp />
      </RouteHandler>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
