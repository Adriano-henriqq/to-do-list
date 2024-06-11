import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import MyProvider from './context/provider';


ReactDOM.render(
  <React.StrictMode>
    <MyProvider> 
    <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
