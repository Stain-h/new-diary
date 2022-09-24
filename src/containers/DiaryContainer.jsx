import React, { useState } from 'react';
import DiarySection from '../components/diarys/DiarySection';
import DiaryPreView from '../components/diarys/DiaryPreView';
import styles from './containers.module.css';
import { useSelector } from 'react-redux';

export default function DiaryContainer() {
  const diarys = useSelector((state) => state.diarys);
  const [diaryDetail, setDiaryDetail] = useState({
    category: '',
    id: '',
  });

  return (
    <div className={styles.diarys}>
      <DiarySection styles={styles} diarys={diarys} setDiaryDetail={setDiaryDetail} />
      <DiaryPreView styles={styles} diarys={diarys} diaryDetail={diaryDetail} />
    </div>
  );
}
