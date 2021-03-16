import { createAction } from '@reduxjs/toolkit';

export const registerReguest = createAction('auth/registerReguest');
export const registerSuccess = createAction('auth/registerSuccess');
export const registerError = createAction('auth/registerError');

export const loginReguest = createAction('auth/loginReguest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError');

export const logoutReguest = createAction('auth/logoutReguest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutError = createAction('auth/logoutError');


export const getCurrentUserReguest = createAction('auth/getCurrentUserReguest');
export const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
