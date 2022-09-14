import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todayDateWithTime } from '../../utils/date';
import { addDiary } from '../../store/reducers/diaryReducer';
import TagList from './TagList';
import EmotionList from './EmotionList';
import TextArea from '../common/TextArea';
import styles from './modal.module.css';

export default function NewDiaryLayer({ setShowPopup }) {
  const dispatch = useDispatch();
  const [emotion, setEmotion] = useState('');
  const [content, setContent] = useState('');
  const [tagList, setTagList] = useState([]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDiary({ emotion, content, tagList, createDate: todayDateWithTime }));
    setShowPopup(false);
  };

  const onModalClick = (e) => {
    const isBackGroundArea = e.target.closest('div').className.indexOf('container') > -1;
    isBackGroundArea && setShowPopup(false);
  };

  return (
    <div className={styles.layer__container} onClick={onModalClick}>
      <div className={styles.layer__inner}>
        <strong className={styles.layer__title}>New Diary</strong>
        <form action="#" className={styles.layer__form} onSubmit={onHandleSubmit}>
          <fieldset>
            <EmotionList emotion={emotion} setEmotion={setEmotion} />
            <TextArea content={content} setContent={setContent} />
            <TagList tagList={tagList} setTagList={setTagList} />
            <button type="submit" className={styles.submit}>
              작성하기
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
