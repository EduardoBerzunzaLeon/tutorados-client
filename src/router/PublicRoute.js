import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    routes,
    ...rest
}) => {
    return (
        <Route { ...rest }
            render={ (props) => (
                ( isAuthenticated )
                    ? ( <Redirect to="/admin" /> )
                    : ( <Component { ...props } routes={routes}  /> )
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
