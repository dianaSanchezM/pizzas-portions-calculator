import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PizzaProvider from './PizzaProvider';
//Added Pizza provider for useContext hook use only
ReactDOM.render(
  <React.StrictMode>
    <PizzaProvider>
      <App/>
    </PizzaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

