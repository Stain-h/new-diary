import React from 'react';

export default function DiaryPreView({ styles }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Diary Preview</h2>
      <div className={styles.preview}></div>
    </div>
  );
}
