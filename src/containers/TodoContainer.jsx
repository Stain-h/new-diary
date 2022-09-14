import React from 'react';
import TodoList from '../components/todos/TodoList';
import TodoAddForm from '../components/todos/TodoAddForm';
import styles from './containers.module.css';

export default function TodoContainer() {
  return (
    <div className={styles.todos}>
      <TodoList styles={styles} />
      <TodoAddForm styles={styles} />
    </div>
  );
}
