import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterSlice from './slice/counterSlice';

const logger = createLogger();

const rootReducer = combineReducers({
  counter: counterSlice,
});

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export default store;
