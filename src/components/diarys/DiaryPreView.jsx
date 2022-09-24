import React, { useEffect, useState } from 'react';
import styles from './diarys.module.css';

export default function DiaryPreView({ diarys, diaryDetail }) {
  const [diary, setDiary] = useState({
    content: '',
    createDate: '',
    emotion: '',
    id: '',
    tagList: [],
  });

  useEffect(() => {
    if (diaryDetail.category !== '') {
      const findCate = diarys.find((section) => section.category === diaryDetail.category);
      const selectedDiary = findCate.diaryList.find((diary) => diary.id === diaryDetail.id);
      setDiary(selectedDiary);
    }
  }, [diarys, diaryDetail]);

  return (
    <div className={styles.section}>
      <h2 className={styles.section__title}>Diary Preview</h2>
      <div className={styles.preview}>
        {diaryDetail.category !== '' && (
          <div>
            <span>Date : {diary.createDate}</span>
            <h3>오늘의 기분</h3>
            <div>{diary.emotion}</div>
            <h3>본문</h3>
            <p>{diary.content}</p>
            <h3>태그</h3>
            <ul style={{ display: 'flex' }}>
              {diary.tagList.map((item, idx) => (
                <li key={item + idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
