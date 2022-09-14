import React from 'react';
import DiaryList from '../components/diarys/DiaryList';
import DiaryPreView from '../components/diarys/DiaryPreView';
import styles from './containers.module.css';

export default function DiaryContainer() {
  return (
    <div className={styles.diarys}>
      <DiaryList styles={styles} />
      <DiaryPreView styles={styles} />
    </div>
  );
}
