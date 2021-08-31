import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { DashBoardScreen } from '../screens/dashboard/DashBoardScreen';

export const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
          <Route exact path="/">
            <DashBoardScreen />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
