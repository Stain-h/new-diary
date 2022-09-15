import React from 'react';
import DiaryContainer from '../containers/DiaryContainer';
import DateContainer from '../containers/DateContainer';
import TodoContainer from '../containers/TodoContainer';
import styles from './style.module.css';
import '../assets/fonts/font.css'

export default function MainPage() {
  return (
    <div>
      <DiaryContainer />
      <DateContainer />
      <TodoContainer />
      <footer className={styles.footer}>Copyright &copy; Sangheon 2022. All right reserved.</footer>
    </div>
  );
}
