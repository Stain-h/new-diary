import React from 'react'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import styles from './style.module.css'

export default function TodoContainer() {
  return (
    <div className={styles.todos}>
      <TodoList styles={styles} />
      <TodoForm styles={styles} />
    </div>
  )
}
