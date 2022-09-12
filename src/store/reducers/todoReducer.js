import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';
import { formatDate } from '../../utils/date';

const initialState = [
  {
    date: formatDate(new Date()),
    todoList: [{ id: '', contents: '', done: false }],
  },
];

export const addTodo = createAction('ADD_TODO');
export const removeTodo = createAction('REMOVE_TODO');
export const toggleDoneTodo = createAction('TOGGLE_DONE_TODO');
export const toggleEditTodo = createAction('TOGGLE_EDIT_TODO');

const todoReducer = createReducer(initialState, {
  [addTodo]: (state, action) => {
    const { date, contents } = action.payload;
    if (contents === '') {
      alert('할일을 입력해주세요');
      return;
    }
    const newTodo = { id: nanoid(), contents, done: false };
    const existedDate = state.find((section) => section.date === date);
    if (existedDate) {
      existedDate.todoList.push(newTodo);
    } else {
      state.push({ date, todoList: [newTodo] });
    }
  },
  [removeTodo]: (state, action) => {
    const { date, id } = action.payload;
    const selectedSection = state.find((existDateSection) => existDateSection.date === date);
    const removedList = selectedSection.todoList.filter((todo) => todo.id !== id);
    selectedSection.todoList = removedList;
  },
  [toggleDoneTodo]: (state, action) => {
    const { date, id } = action.payload;
    const selectedSection = state.find((existDateSection) => existDateSection.date === date);
    const selectedTodo = selectedSection.todoList.find((todo) => todo.id === id);
    selectedTodo.done = !selectedTodo.done;
  },
  [toggleEditTodo]: (state, action) => {
    const { date, id } = action.payload;
    const selectedSection = state.find((existDateSection) => existDateSection.date === date);
    const selectedTodo = selectedSection.todoList.find((todo) => todo.id === id);
    // selectedTodo.isEditing = !selectedTodo.isEditing;
  },
});

export default todoReducer;
