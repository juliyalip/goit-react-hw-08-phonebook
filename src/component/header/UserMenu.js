import React from 'react';
import { connect } from 'react-redux';
import defaultFoto from '../defaultfoto.jpg';

import authSelectors from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations'

const UserMenu = ({ avatar, name, onLogout }) => (
    <div>
        <img src={avatar} alt={name} width={ 35}/>
        <span>Приветствую, {name}</span>
        <button type="button" onClick={onLogout}>Logout</button>
    </div>
);

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    avatar: defaultFoto
});

const mapDispatchToProps = {
    onLogout: operations.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);