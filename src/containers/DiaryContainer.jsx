import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DiaryList from '../components/DiaryList';
import DiaryPreView from '../components/DiaryPreView';
import { minus, plus } from '../store/slice/counterSlice';
import styles from './style.module.css';

export default function DiaryContainer() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div className={styles.diarys}>
      <DiaryList styles={styles} />
      <DiaryPreView styles={styles} />
      <div>
        <p>value: {count}</p>
        <button onClick={() => dispatch(plus())}>+</button>
        <button onClick={() => dispatch(minus())}>-</button>
      </div>
    </div>
  );
}
