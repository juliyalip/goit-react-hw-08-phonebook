import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav'; 
import UserMenu from '../UserMenu';
import s from './AppBar.module.css'



const AppBar = ({isAuthenticated}) => (
    <header>
        <div className={s.container}>
        <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
           
        </div>
        <hr></hr>
    </header>);

const mapStateToProps =state => ({
        isAuthenticated: authSelectors.getAuthenticated(state)
    }
)
export default connect(mapStateToProps)(AppBar);
