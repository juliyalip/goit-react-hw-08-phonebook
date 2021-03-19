import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors'

import Navigation from './Navigation';

import AuthNav from './AuthNav'; // если не залогинились
import UserMenu from './UserMenu' // если зарегистрирован
import './header.css'



const AppBar = ({isAuthenticated}) => (
    <header>
        <div className="menuContainer">
        <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
            </div>
    </header>);

const mapStateToProps =state => ({
        isAuthenticated: authSelectors.getAuthenticated(state)
    }
)
export default connect(mapStateToProps)(AppBar);
