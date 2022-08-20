import React from 'react'
import DiaryContainer from '../containers/DiaryContainer'
import DateContainer from '../containers/DateContainer'
import TodoContainer from '../containers/TodoContainer'
import styles from './style.module.css'

export default function MainPage() {
  return (
    <div className="">
      <DiaryContainer />
      <DateContainer />
      <TodoContainer />
      <footer className={styles.footer}>
      Copyright &copy; by sangheon All right reserved. 2022.
      </footer>
    </div>
  )
}
