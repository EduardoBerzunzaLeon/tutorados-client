import React from 'react';

import { useSelector } from 'react-redux';
import { Switch } from 'react-router';

import {
  selectCurrentUser,
  selectChecking,
} from '../redux/auth/auth.selectors';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { SpinnerCenter } from '../components/spinnerCenter/SpinnerCenter';

export const LoadRoutes = ({ routes }) => {
  const currentUser = useSelector(selectCurrentUser);
  const checking = useSelector(selectChecking);

  if (checking) return <SpinnerCenter message="Estamos trabajando..." />;

  return (
    <Switch>
      {routes.map((route, index) => {
        const RouteComponent = route.private ? PrivateRoute : PublicRoute;
        return (
          <RouteComponent
            key={index}
            isAuthenticated={!!currentUser}
            {...route}
          />
        );
      })}
    </Switch>
  );
};
