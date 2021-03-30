import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import authReduser from './auth/auth-reducer';
import contactsReducer from './contact/reducer';

const middleware = [...getDefaultMiddleware(), logger];

//const rootReduser = combineReducers({
//  contacts: contactsReducer,
//  auth: persistReducer({}, authReduser)
//});

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReduser),
		contacts: contactsReducer,
	},
	middleware,
	devTools: process.env.NODE_ENV === 'development',
});

//const store = configureStore({
//   reducer: rootReduser,
//   middleware,
//devTools: process.env.NODE_ENV === 'development'}
//)

const persistor = persistStore(store);

const myStore = { persistor, store };

export default myStore;
