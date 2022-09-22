import React from 'react';
import { useSelector } from 'react-redux';
import { todayDateStr } from '../../utils/date';
import Todo from './Todo';
import styles from './todo.module.css';

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className={styles.wrap}>
      {todos.length > 0 ? (
        todos.map((section) => {
          const { date, todoList } = section;
          const convertedDate = `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(8, 10)}일`;
          return (
            todoList.length > 0 && (
              <div key={date} className={styles.box}>
                <p className={styles.log}>{convertedDate}</p>
                <ul className={styles.list}>
                  {todoList.map((todo) => (
                    <Todo key={todo.id} date={date} todo={todo} />
                  ))}
                </ul>
              </div>
            )
          );
        })
      ) : (
        <div className={styles.box}>
          <p className={styles.log}>
            {todayDateStr.slice(0, 4)}년 {todayDateStr.slice(5, 7)}월 {todayDateStr.slice(8, 10)}일
          </p>
        </div>
      )}
    </div>
  );
}
