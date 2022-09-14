import React from 'react';
import { todayMonth } from '../../utils/date';
import styles from './diarys.module.css';

export default function Diary({ section, setShowPopup }) {
  const { category, diaryList } = section;
  const month = category.slice(5, 7);
  return (
    <div className={styles.box}>
      <em className={styles.month}>{category !== '' ? category.slice(-1) : todayMonth.slice(-1)}월</em>
      <ul className={styles.list}>
        {diaryList.length > 0 &&
          diaryList.map((diary) => (
            <li key={diary.id} className={styles.diary}>
              <strong className={styles.date}>{diary.createDate.slice(8, 10)}일</strong>
              <p>{diary.content}</p>
            </li>
          ))}
        {month === todayMonth && (
          <li className={styles.diary}>
            <button className={styles.btn_add} onClick={() => setShowPopup(true)}>
              +
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
