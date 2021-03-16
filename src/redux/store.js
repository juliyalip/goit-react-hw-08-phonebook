//import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';


import rootReduser from './contact/reducer';

const middleware = [...getDefaultMiddleware(),
  logger];



const store = configureStore({
    reducer: rootReduser,
    middleware,
devTools: process.env.NODE_ENV === 'development'}
)




export default store;