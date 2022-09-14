import React from 'react';
import styles from './diarys.module.css'

export default function DiaryPreView() {
  return (
    <div className={styles.section}>
      <h2 className={styles.section__title}>Diary Preview</h2>
      <div className={styles.preview}></div>
    </div>
  );
}
