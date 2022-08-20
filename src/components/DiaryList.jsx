import React from 'react'

export default function DiaryList({ styles }) {
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
            <button className={styles.new_diary}>+</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
