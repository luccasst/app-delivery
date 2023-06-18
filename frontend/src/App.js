import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './helpers/routes';
import DeliveryProvider from './context/provider';

function App() {
  return (
    <BrowserRouter>
      <DeliveryProvider>
        <Routes />
      </DeliveryProvider>
    </BrowserRouter>
  );
}

export default App;
