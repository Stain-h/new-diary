import React from 'react';
import { todayMonth } from '../../utils/date';
import styles from './diarys.module.css';

export default function DiaryList({ section, setDiaryDetail, setShowPopup }) {
  const { category, diaryList } = section;
  const month = category.slice(5, 7);

  const onHandleClick = (id) => {
    setDiaryDetail({ category, id });
  };
  return (
    <div className={styles.list}>
      {diaryList.length > 0 &&
        diaryList.map((diary, index) => (
          <div key={diary.id} className={styles.diary} onClick={() => onHandleClick(diary.id)}>
            <strong className={styles.date}>
              {diary.createDate.slice(8, 10)}일 - {index + 1}
            </strong>
          </div>
        ))}
      {month === todayMonth && (
        <div className={styles.diary_add} onClick={() => setShowPopup(true)}>
          +
        </div>
      )}
    </div>
  );
}
