import React from 'react';

import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import MainMenu from './components/mainMenu/MainMenu';
import { Routes } from './routes/Routes';

function App() {
  // active ripple effect
  PrimeReact.ripple = true;

  return (
    <div className="App">
      {/* <MainMenu /> */}
      <Routes />
    </div>
  );
}

export default App;
