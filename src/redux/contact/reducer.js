import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContatcReguest, addContactSuccess, addContactError,
    deleteContactReguest, deleteContactSuccess,  deleteContactError,
    changleFilter, fetchContatcReguest, fetchContactSuccess, fetchContactError
} from './contact-action';




const contactsReduser = createReducer([], {
    [fetchContactSuccess]: (_, {payload}) => payload,

    [addContactSuccess]: (state, { payload }) => [...state, payload],

    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) =>     id !== payload)
}
)


const loadingReduser = createReducer(false, {
    [fetchContatcReguest]: () => false,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
   
    [addContatcReguest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    [deleteContactReguest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false
})

 
const filterReduser = createReducer('', {
    [changleFilter]: (_, {payload}) => payload
})



export default combineReducers({
    contacts: contactsReduser, 
    filter: filterReduser,
    loading: loadingReduser
})