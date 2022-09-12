import React from 'react';
import DiaryList from '../components/DiaryList';
import DiaryPreView from '../components/DiaryPreView';
import styles from './style.module.css';

export default function DiaryContainer() {
  return (
    <div className={styles.diarys}>
      <DiaryList styles={styles} />
      <DiaryPreView styles={styles} />
    </div>
  );
}
