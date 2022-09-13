import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleDoneTodo, toggleEditTodo } from '../store/reducers/todoReducer';
import { BiEdit } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

export default function Todo({ date, todo }) {
  const dispatch = useDispatch();

  const toggleCheckBox = (date, id) => {
    dispatch(toggleDoneTodo({ date, id }));
  };
  const onHandleClick = (e, date, id) => {
    const { name } = e.target;
    name === 'edit' && dispatch(toggleEditTodo({ date, id }));
    name === 'remove' && dispatch(removeTodo({ date, id }));
  };

  return (
    <li>
      <span className="wrap_todo">
        <input type="checkbox" onChange={() => toggleCheckBox(date, todo.id)} checked={todo.done ? 'checked' : ''} />
        <span className="text">{todo.contents}</span>
      </span>
      <span className="wrap_btn">
        <button type="button" name="edit" onClick={(e) => onHandleClick(e, date, todo.id)}>
          <BiEdit />
        </button>
        <button type="button" name="remove" onClick={(e) => onHandleClick(e, date, todo.id)}>
          <GrFormClose />
        </button>
      </span>
    </li>
  );
}
