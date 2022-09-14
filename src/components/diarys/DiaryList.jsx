import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Diary from './Diary';
import DiaryAddLayer from '../modal/DiaryAddLayer';
import styles from './diarys.module.css';

export default function DiaryList() {
  const [showPopup, setShowPopup] = useState(false);
  const diarys = useSelector((state) => state.diarys);

  return (
    <div className={styles.section}>
      <h2 className={styles.section__title}>Diary</h2>
      {diarys.length > 0 &&
        diarys.map((section) => (
          <Diary key={section.id} styles={styles} section={section} setShowPopup={setShowPopup} />
        ))}
      {showPopup && <DiaryAddLayer styles={styles} setShowPopup={setShowPopup} />}
    </div>
  );
}
