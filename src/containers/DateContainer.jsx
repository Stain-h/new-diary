import React from 'react';
import styles from './containers.module.css';
import { formatDayOfWeek, todayDateStr } from '../utils/date';

export default function DateContainer() {
  return (
    <div className={styles.dates}>
      <p className={styles.today}>
        {' '}
        {todayDateStr} ({formatDayOfWeek()})
      </p>
    </div>
  );
}
