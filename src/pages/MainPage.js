import React from 'react';
import DiaryContainer from '../containers/DiaryContainer';
import DateContainer from '../containers/DateContainer';
import TodoContainer from '../containers/TodoContainer';
import styles from './style.module.css';

export default function MainPage() {
  return (
    <>
      <DiaryContainer />
      <DateContainer />
      <TodoContainer />
      <footer className={styles.footer}>Copyright &copy; Sangheon 2022. All right reserved.</footer>
    </>
  );
}
