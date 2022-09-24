import React, { useState } from 'react';
import DiaryList from './DiaryList';
import DiaryAddLayer from '../modal/DiaryAddLayer';
import { todayMonth } from '../../utils/date';
import styles from './diarys.module.css';

export default function DiaryBox({ diarys, setDiaryDetail }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={styles.section}>
      <h2 className={styles.section__title}>Diary</h2>
      {diarys.length > 0 ? (
        diarys.map((section) => {
          const { category } = section;
          return (
            <div key={section.id} className={styles.box}>
              <em className={styles.month}>{category !== '' ? category.slice(-1) : todayMonth.slice(-1)}월</em>
              <DiaryList section={section} setShowPopup={setShowPopup} setDiaryDetail={setDiaryDetail} />
            </div>
          );
        })
      ) : (
        <div className={styles.box}>
          <em className={styles.month}>{todayMonth.slice(-1)}월</em>
          <div className={styles.diary_add} onClick={() => setShowPopup(true)}>
            +
          </div>
        </div>
      )}
      {showPopup && <DiaryAddLayer styles={styles} setShowPopup={setShowPopup} />}
    </div>
  );
}
