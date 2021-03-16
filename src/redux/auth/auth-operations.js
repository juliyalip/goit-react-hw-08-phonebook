import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';


// POST @ /user/signup
// body {name, email, password}
// после указанной регистрации добавляем токен в НТТР заголовок

const register = credentails => async dispatch => {
    dispatch(authActions.registerReguest());
    try {
    const response = await  axios.post('/users/signup', credentails )

        dispatch(authActions.registerSuccess(response.data))
    } catch (error) {
        dispatch(authActions.registerError(error))
    }
   
}