import React from 'react'
import styles from './style.module.css'

export default function DateContainer() {
  const date = new Date();
  const weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className={styles.dates}>
      <p className={styles.today}> {date.toLocaleDateString('ko-kr')} {weekDay[date.getDay()]}</p>
    </div>
  )
}
