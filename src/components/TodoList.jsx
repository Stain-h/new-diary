import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList({ styles }) {
  const todos = useSelector((state) => state.todos);

  return (
    <div className={styles.wrap}>
      {todos.length > 0 &&
        todos.map((section) => {
          const { date, todoList } = section;
          const convertedDate = `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(8, 10)}일`;
          return (
            todoList.length > 0 && (
              <div key={date} className={styles.box}>
                <p className={styles.log}>{convertedDate}</p>
                <ul className={styles.list}>
                  {todoList.map((todo) => (
                    <TodoItem date={date} todo={todo} />
                  ))}
                </ul>
              </div>
            )
          );
        })}
    </div>
  );
}
