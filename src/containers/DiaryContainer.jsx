import React from 'react';
import DiarySection from '../components/diarys/DiarySection';
import DiaryPreView from '../components/diarys/DiaryPreView';
import styles from './containers.module.css';

export default function DiaryContainer() {
  return (
    <div className={styles.diarys}>
      <DiarySection styles={styles} />
      <DiaryPreView styles={styles} />
    </div>
  );
}
