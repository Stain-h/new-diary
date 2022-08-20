import React from 'react'
import styles from './style.module.css'

export default function DateContainer() {
  const date = new Date();

  return (
    <div className={styles.dates}>
      <p className={styles.today}> {date.toLocaleDateString('ko-kr')} (수)</p>
    </div>
  )
}
