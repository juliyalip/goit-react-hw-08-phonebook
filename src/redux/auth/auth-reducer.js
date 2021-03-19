import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as authActions from './auth-actions';

const initialUserState = {
    name: null,
    email: null
};

const user = createReducer(initialUserState, {// сюда записываем ответ после запроса из респонса приходит ответ со свойствам user
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: (_, __) => initialUserState
}); 

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.token,
    [authActions.logoutSuccess]: () => null
})

const error = createReducer(null, {
    [authActions.registerError]: (_, { payload }) => payload,
    [authActions.logoutError]: (_, { payload }) => payload,
    [authActions.logoutError]: (_, {payload}) => payload
});


export default combineReducers({
    user,
    token,
    error
})