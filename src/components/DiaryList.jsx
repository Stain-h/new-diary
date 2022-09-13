import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Diary from './Diary';
import NewDiaryLayer from './NewDiaryLayer';

export default function DiaryList({ styles }) {
  const [showPopup, setShowPopup] = useState(false);
  const diarys = useSelector((state) => state.diarys);

  useEffect(() => {
    console.log(diarys);
  }, []);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Diary</h2>
      {diarys.length > 0 &&
        diarys.map((section) => {
          return <Diary key={section.id} styles={styles} section={section} setShowPopup={setShowPopup} />;
        })}
      {showPopup && <NewDiaryLayer styles={styles} setShowPopup={setShowPopup} />}
    </div>
  );
}
