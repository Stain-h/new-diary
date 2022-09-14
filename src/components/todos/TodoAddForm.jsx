import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/reducers/todoReducer';
import { todayDateStr } from '../../utils/date';
import { IoMdPaperPlane } from 'react-icons/io';
import InputText from '../common/InputText';
import styles from './todo.module.css';

export default function TodoInput() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (value === '') {
      alert('할일을 입력해주세요');
      return;
    }
    dispatch(addTodo({ date: todayDateStr, contents: value }));
    setValue('');
  };

  return (
    <form action="#" className={styles.form} onSubmit={onHandleSubmit}>
      <fieldset className={styles.fieldset}>
        <InputText value={value} setValue={setValue} />
        <button type="submit">
          <IoMdPaperPlane />
        </button>
      </fieldset>
    </form>
  );
}
