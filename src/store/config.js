import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import todoReducer from './reducers/todoReducer';
import { getItem, setItem } from '../utils/localstorage';
import diaryReducer from './reducers/diaryReducer';

const logger = createLogger();

const rootReducer = combineReducers({
  todos: todoReducer,
  diarys: diaryReducer,
});

const initialState = {
  todos: getItem('todo_list', []),
  diarys: getItem('diarys', []),
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

store.subscribe(() => {
  setItem('todo_list', store.getState().todos);
  setItem('diarys', store.getState().diarys);
});

export default store;
