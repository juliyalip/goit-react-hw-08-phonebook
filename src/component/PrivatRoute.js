import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';


const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo,  // зададим куда перекинуть, если нет приватного доступа
    ...routeProps
}) => (
    <Route {...routeProps} render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />} />
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getAuthenticated(state)
})

export default connect(mapStateToProps)(PrivateRoute);