import React from 'react';
import styles from './modal.module.css';

export default function TextArea({ content, setContent }) {
  return (
    <div>
      <label htmlFor="textArea">일기쓰기</label>
      <textarea
        name=""
        id="textArea"
        cols="30"
        rows="10"
        resize="none"
        className={styles.textarea}
        placeholder="일기를 입력하세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </div>
  );
}
