import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/reducers/todoReducer';
import { formatDate } from '../utils/date';
import Input from './Input';

export default function TodoInput() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ date: formatDate(new Date()), contents: value }));
    setValue('');
  };

  return (
    <form action="#" style={{ width: '100%' }} onSubmit={onHandleSubmit}>
      <fieldset style={{ display: 'flex', padding: '15px 20px 13px', boxSizing: 'border-box' }}>
        <Input value={value} setValue={setValue} />
        <button type="submit">button!</button>
      </fieldset>
    </form>
  );
}
