import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import MyProvider from './context/provider';
import ProviderTimer from './context/providerTimer';


ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <ProviderTimer> 
    <App />
      </ProviderTimer>
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
