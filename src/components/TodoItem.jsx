import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleDoneTodo, toggleEditTodo } from '../store/reducers/todoReducer';
import styled from 'styled-components';
import { BiEdit } from 'react-icons/bi';

export default function TodoItem({ date, todo }) {
  const dispatch = useDispatch();

  const onHandleChange = (date, id) => {
    dispatch(toggleDoneTodo({ date, id }));
  };
  const onHandleClick = (e, date, id) => {
    const { name } = e.target;
    name === 'edit' && dispatch(toggleEditTodo({ date, id }));
    name === 'remove' && dispatch(removeTodo({ date, id }));
  };

  return (
    <Todo key={todo.id}>
      <span className="wrap_todo">
        <input type="checkbox" onChange={() => onHandleChange(date, todo.id)} checked={todo.done ? 'checked' : ''} />
        <span className="text">{todo.contents}</span>
      </span>
      <span className="wrap_btn">
        <button type="button" name="edit" onClick={(e) => onHandleClick(e, date, todo.id)}>
          <BiEdit />
        </button>
        <button type="button" name="remove" onClick={(e) => onHandleClick(e, date, todo.id)}>
          삭제
        </button>
      </span>
    </Todo>
  );
}

const Todo = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  & + li {
    margin-top: 5px;
  }
  .wrap_todo {
    display: flex;
  }
  .text {
    display: inline-block;
  }
  button {
    margin: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #333;
    text-indent: -9999px;
  }
  button + button {
    margin-left: 4px;
  }
  input {
    flex-basis: 19px;
    width: 16px;
    height: 16px;
    margin-top: 2px;
    margin-right: 8px;
    vertical-align: top;
  }
  input:checked + span {
    color: #999;
    text-decoration: line-through;
  }
`;
