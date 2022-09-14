import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import styles from './modal.module.css';

export default function TagList({ tagList, setTagList }) {
  const [textValue, setTextValue] = useState('');
  const onHandleChange = (e) => {
    setTextValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.value !== '' && setTagList([...tagList, textValue]);
      setTextValue('');
    }
  };

  return (
    <div className={styles.taglist}>
      {tagList.length > 0 &&
        tagList.map((tag, idx) => (
          <span key={idx}>
            {tag}{' '}
            <button type="button" onClick={() => {}}>
              <GrFormClose />
            </button>
          </span>
        ))}
      <input
        type="text"
        placeholder="add tag"
        value={textValue}
        onChange={onHandleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
