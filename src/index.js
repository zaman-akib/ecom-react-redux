import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import RootComponent from './components/root-component/RootComponent'

ReactDOM.render(
  <React.StrictMode>
      <RootComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
