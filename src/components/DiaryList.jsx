import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Diary from './Diary';
import DiaryAddLayer from './DiaryAddLayer';

export default function DiaryList({ styles }) {
  const [showPopup, setShowPopup] = useState(false);
  const diarys = useSelector((state) => state.diarys);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Diary</h2>
      {diarys.length > 0 &&
        diarys.map((section) => (
          <Diary key={section.id} styles={styles} section={section} setShowPopup={setShowPopup} />
        ))}
      {showPopup && <DiaryAddLayer styles={styles} setShowPopup={setShowPopup} />}
    </div>
  );
}
