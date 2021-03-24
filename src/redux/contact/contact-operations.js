import axios from 'axios';
import * as actions from './contact-action';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';


 export const fetchContact = () => async dispatch => {
     dispatch(actions.fetchContatcReguest());

    try {
       const { data } = await axios.get('/contacts');

        dispatch(actions.fetchContactSuccess(data));

          } catch (error) {
        dispatch(actions.fetchContactError(error.message))
          }

}


export const addContact = ({ name, number} ) => dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(actions.addContatcReguest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactError(error.message)))
}

export const deleteContact = contactId => dispatch => {
    dispatch(actions.deleteContactReguest())

    axios.delete(`/contacts/${contactId}`)
        .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error.message)))

}