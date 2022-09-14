import React from 'react';
import {
  RiEmotionLaughLine,
  RiEmotionLine,
  RiEmotionNormalLine,
  RiEmotionSadLine,
  RiEmotionUnhappyLine,
} from 'react-icons/ri';
import styles from './modal.module.css';

export default function EmotionList({ emotion, setEmotion }) {
  const onHandleChange = (e) => {
    setEmotion(e.target.value);
  };

  return (
    <div className={styles.emotions}>
      <label htmlFor="">오늘의 기분</label>
      <ul className={styles.emotionlist}>
        {emotionList.map((item) => (
          <li key={item.id}>
            <input
              type="radio"
              id={`radio${item.id}`}
              value={item.name}
              checked={emotion === item.name}
              onChange={onHandleChange}
            />
            <label htmlFor={`radio${item.id}`} style={{ color: item.color }}>
              {item.icon}
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

const emotionList = [
  { id: 0, icon: <RiEmotionLaughLine color="#036635" />, name: '기쁨', color: '#036635' },
  { id: 1, icon: <RiEmotionLine color="blue" />, name: '좋음', color: 'blue' },
  { id: 2, icon: <RiEmotionNormalLine color="#f0f0ff" />, name: '보통', color: 'f0f0ff' },
  { id: 3, icon: <RiEmotionSadLine color="orange" />, name: '슬픔', color: 'orange' },
  { id: 4, icon: <RiEmotionUnhappyLine color="red" />, name: '화남', color: 'red' },
];
