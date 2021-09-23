import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
