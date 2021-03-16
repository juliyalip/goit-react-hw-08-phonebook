import { createSelector} from '@reduxjs/toolkit';

const getLoading = state => state.loaging;

const getContacts = state => state.contacts;

const getFilter = state => state.filter;

  
const getVisibleContact = createSelector(
    [getContacts, getFilter],

    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(({name}) =>  name.toLowerCase().includes(normalizedFilter) )
})

const selectors = {
    getLoading,
    getContacts,
    getFilter,
    getVisibleContact
}

export default selectors;