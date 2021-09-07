import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadRoutes } from './LoadRoutes';
import { routes } from './routes';

export const Routes = () => {
  return (
    <Router>
      <div>
        <LoadRoutes routes={routes} />
      </div>
    </Router>
  );
};
