import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    routes,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } routes={routes}/> )
                    : ( <Redirect to="/login" /> )
            )} 
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
