import React from 'react';

import { useSelector } from 'react-redux';
import { Switch } from 'react-router';

import { selectCurrentUser, selectChecking } from '../redux/auth/auth.selectors';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const LoadRoutes = ({ routes }) => {
  const currentUser = useSelector(selectCurrentUser);
  const checking  = useSelector(selectChecking);

  if(checking) {
    // TODO: do loading
    return (<h5>Loading</h5>);
  }

  return (
    <Switch>
      {routes.map((route, index) => {
          const RouteComponent = (route.private) ? PrivateRoute : PublicRoute;
          return <RouteComponent
            key={index}
            isAuthenticated={!!currentUser}
            {...route}
          />}
        )
      }
    </Switch>
  );
};
