import React from 'react';
import TodoList from '../components/TodoList';
import TodoAddForm from '../components/TodoAddForm';
import styles from './style.module.css';

export default function TodoContainer() {
  return (
    <div className={styles.todos}>
      <TodoList styles={styles} />
      <TodoAddForm styles={styles} />
    </div>
  );
}
