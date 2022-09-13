import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/reducers/todoReducer';
import { todayDateStr } from '../utils/date';
import { IoMdPaperPlane } from 'react-icons/io';
import InputText from './InputText';

export default function TodoInput() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ date: todayDateStr, contents: value }));
    setValue('');
  };

  return (
    <form action="#" style={{ width: '100%' }} onSubmit={onHandleSubmit}>
      <fieldset style={{ display: 'flex', padding: '15px 20px 13px', boxSizing: 'border-box' }}>
        <InputText value={value} setValue={setValue} />
        <button type="submit">
          <IoMdPaperPlane />
        </button>
      </fieldset>
    </form>
  );
}
