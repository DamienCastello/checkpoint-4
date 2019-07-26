import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import  AuthReducers from './reducers/auth';

const persistConfig = {
  key: 'XxXxX-XxXxXXdsjfi',
  storage: LocalStorage,
  whitelist: ['auth', 'config'],
  blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, AuthReducers)


const store = process.env.NODE_ENV === 'production'
  ?
  createStore(
    persistedReducer,
    applyMiddleware(thunk))
  :
  createStore(
    persistedReducer,
    applyMiddleware(thunk))

export default store;