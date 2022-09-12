import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleDoneTodo, toggleEditTodo } from '../store/reducers/todoReducer';

export default function TodoList({ styles }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const onHandleChange = (date, id) => {
    dispatch(toggleDoneTodo({ date, id }));
  };
  const onHandleClick = (e, date, id) => {
    const { name } = e.target;
    name === 'edit' && dispatch(toggleEditTodo({ date, id }));
    name === 'remove' && dispatch(removeTodo({ date, id }));
  };

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
                  {todoList.map(
                    (todo) =>
                      todo.contents !== '' && (
                        <li key={todo.id} className={styles.todo}>
                          <span className={styles.box_inp}>
                            <input
                              type="checkbox"
                              onChange={() => onHandleChange(section.date, todo.id)}
                              checked={todo.done ? 'checked' : ''}
                            />
                            <span className={styles.text}>{todo.contents}</span>
                          </span>
                          <span className="group_btn">
                            <button type="button" name="edit" onClick={(e) => onHandleClick(e, section.date, todo.id)}>
                              수정
                            </button>
                            <button
                              type="button"
                              name="remove"
                              onClick={(e) => onHandleClick(e, section.date, todo.id)}
                            >
                              삭제
                            </button>
                          </span>
                        </li>
                      ),
                  )}
                </ul>
              </div>
            )
          );
        })}
    </div>
  );
}
