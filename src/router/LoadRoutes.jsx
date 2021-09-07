import React from 'react';
import { Route, Switch } from 'react-router';

export const LoadRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        // <Route key={index} {...route} />
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      ))}
    </Switch>
  );
};
