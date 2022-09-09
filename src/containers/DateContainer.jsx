import React from 'react';
import styles from './style.module.css';
import { formatDate, formatDayOfWeek } from '../utils/date';

export default function DateContainer() {
  return (
    <div className={styles.dates}>
      <p className={styles.today}>
        {' '}
        {formatDate(new Date())} ({formatDayOfWeek(new Date())})
      </p>
    </div>
  );
}
