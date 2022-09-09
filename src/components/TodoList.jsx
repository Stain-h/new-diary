import React, { useState } from 'react';

export default function TodoList({ styles }) {
  const [isChecked, setIsChecked] = useState(false);

  const onHandleChange = () => {
    setIsChecked(!isChecked);
  };
  const onHandleClick = (e) => {
    alert(`${e.target.innerText}버튼 클릭!`);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <p className={styles.log}>2022년 8월 18일</p>
        <ul className={styles.list}>
          <li className={styles.todo}>
            <span>
              <input type="checkbox" onChange={onHandleChange} checked={isChecked} />
              <span className={styles.text}>추가된 할일</span>
            </span>
            <span className="">
              <button type="button" onClick={onHandleClick}>
                수정
              </button>
              <button type="button" onClick={onHandleClick}>
                삭제
              </button>
            </span>
          </li>
          <li className={styles.todo}>
            <span>
              <input type="checkbox" onChange={onHandleChange} checked={isChecked} />
              <span className={styles.text}>추가된 할일</span>
            </span>
            <span className="">
              <button type="button" onClick={onHandleClick}>
                수정
              </button>
              <button type="button" onClick={onHandleClick}>
                삭제
              </button>
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.box}>
        <p className={styles.log}>2022년 8월 20일</p>
        <ul className={styles.list}>
          <li className={styles.todo}>
            <span>
              <input type="checkbox" onChange={onHandleChange} checked={isChecked} />
              <span className={styles.text}>추가된 할일</span>
            </span>
            <span className="">
              <button type="button" onClick={onHandleClick}>
                수정
              </button>
              <button type="button" onClick={onHandleClick}>
                삭제
              </button>
            </span>
          </li>
          <li className={styles.todo}>
            <span>
              <input type="checkbox" onChange={onHandleChange} checked={isChecked} />
              <span className={styles.text}>추가된 할일</span>
            </span>
            <span className="">
              <button type="button" onClick={onHandleClick}>
                수정
              </button>
              <button type="button" onClick={onHandleClick}>
                삭제
              </button>
            </span>
          </li>
          <li className={styles.todo}>
            <span>
              <input type="checkbox" onChange={onHandleChange} checked={isChecked} />
              <span className={styles.text}>추가된 할일</span>
            </span>
            <span className="">
              <button type="button" onClick={onHandleClick}>
                수정
              </button>
              <button type="button" onClick={onHandleClick}>
                삭제
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
