import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
	addContactSuccess,
	deleteContactSuccess,
	changleFilter,
	fetchContactSuccess,
} from './contact-action';

const contactsReduser = createReducer([], {
	[fetchContactSuccess]: (_, { payload }) => payload,

	[addContactSuccess]: (state, { payload }) => [...state, payload],

	[deleteContactSuccess]: (state, { payload }) =>
		state.filter(({ id }) => id !== payload),
});

const filterReduser = createReducer('', {
	[changleFilter]: (_, { payload }) => payload,
});

export default combineReducers({
	contacts: contactsReduser,
	filter: filterReduser,
});
