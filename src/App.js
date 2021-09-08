import React from 'react';

import PrimeReact from 'primereact/api';

import { Routes } from './router/Router';

import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  // active ripple effect
  PrimeReact.ripple = true;

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
