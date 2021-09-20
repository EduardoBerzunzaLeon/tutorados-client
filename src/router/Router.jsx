import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { startChecking } from '../redux/auth/auth.actions';

import { LoadRoutes } from './LoadRoutes';
import { routes } from './routes';

export const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <LoadRoutes routes={routes} />
      </div>
    </Router>
  );
};
