import React, { useState } from 'react'
import NewDiaryLayer from './NewDiaryLayer';

export default function DiaryList({ styles }) {
  const [showPopup, setShowPopup] = useState(false)

  const onModalClick = (e) => {
    const isBackGroundArea = e.target.closest('div').className.indexOf('layer') > -1;
    isBackGroundArea && setShowPopup(!showPopup)
  }

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Diary</h2>
      <div className={styles.box}>
        <em className={styles.month}>7월</em>
        <ul className={styles.list}>
          <li className={styles.diary}>
            <strong className={styles.date}>29일</strong>
          </li>
          <li className={styles.diary}>
            <button className={styles.new_diary} onClick={() => setShowPopup(!showPopup)}>+</button>
          </li>
        </ul>
      </div>
      {showPopup && <NewDiaryLayer styles={styles} onModalClick={onModalClick} />}
    </div>
  )
}
