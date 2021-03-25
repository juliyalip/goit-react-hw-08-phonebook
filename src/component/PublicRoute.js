// если маршрут ограничен и пользователь залогинен рендерим
// на другой, который укажем
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';


const PublicRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo,
    ...routeProps
}) => (
    <Route {...routeProps} render={props =>
        isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
    ) : (<Component {...props} />)}
    />
);


const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getAuthenticated(state)
});

export default connect(mapStateToProps)(PublicRoute);