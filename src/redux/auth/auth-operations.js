import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

 

const token = {
//2 метода (set, unset)
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}


// POST @ /user/signup
// body {name, email, password}
// после указанной регистрации добавляем токен в НТТР заголовок

const register = credentails => async dispatch => {
    dispatch(authActions.registerReguest());
    try {
    const response = await  axios.post('/users/signup', credentails )

        token.set(response.data.token);
        dispatch(authActions.registerSuccess(response.data))
        
    } catch (error) {
        dispatch(authActions.registerError(error.message))
    }
   
}

const logIn = credentails => async dispatch => {
    dispatch(authActions.loginReguest());

    try {
        const response = await axios.post('/users/login', credentails);

        token.set(response.data.token);
        dispatch(authActions.loginSuccess(response.data))
    }
    catch (error) {
        dispatch(authActions.logoutError(error.message))
        }
};

const logOut = () => async dispatch => {
    // явно заголовок можно не прописывать, его уже засетили
    dispatch(authActions.logoutReguest());

    try {
       await axios.post('/users/logout');

        // если все ок, мы разлогинились, то заголовок снимаем
        token.unset()
        dispatch(authActions.logoutSuccess())
    }
    catch (error) {
        dispatch(authActions.logoutError(error.message))
    }
 }

const operations = { register, logIn, logOut};

export default operations;