import React from 'react';

import { Provider } from 'react-redux';
import PrimeReact from 'primereact/api';

import { store } from './redux/store';

import { Routes } from './router/Router';

import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  // active ripple effect
  PrimeReact.ripple = true;
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
