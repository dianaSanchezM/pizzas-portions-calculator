import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PizzaProvider from './PizzaProvider';

ReactDOM.render(
  <React.StrictMode>
    <PizzaProvider>
      <App/>
    </PizzaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

