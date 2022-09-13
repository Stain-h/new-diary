import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDiary } from '../store/reducers/diaryReducer';
import { todayDateWithTime } from '../utils/date';
import {
  RiEmotionLaughLine,
  RiEmotionLine,
  RiEmotionNormalLine,
  RiEmotionSadLine,
  RiEmotionUnhappyLine,
} from 'react-icons/ri';
import { GrFormClose } from 'react-icons/gr';

export default function NewDiaryLayer({ styles, setShowPopup }) {
  const dispatch = useDispatch();
  const [emotion, setEmotion] = useState('');
  const [textValue, setTextValue] = useState('');
  const [content, setContent] = useState('');
  const [tagList, setTagList] = useState([]);

  const onHandleChange = (e) => {
    const target = e.target;
    if (target.type === 'text') {
      setTextValue(target.value);
    } else if (target.type === 'radio') {
      setEmotion(target.value);
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDiary({ emotion, content, tagList, createDate: todayDateWithTime }));
    setShowPopup(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.value !== '' && setTagList([...tagList, textValue]);
      setTextValue('');
    }
  };

  const onModalClick = (e) => {
    const isBackGroundArea = e.target.closest('div').className.indexOf('layer') > -1;
    isBackGroundArea && setShowPopup(false);
  };

  return (
    <div className={styles.layer} onClick={onModalClick}>
      <div className={styles.inner}>
        <strong className={styles.layer_title}>New Diary</strong>
        <form action="#" className={styles.form} onSubmit={onHandleSubmit}>
          <fieldset>
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
            <button type="submit" className={styles.submit}>
              작성하기
            </button>
          </fieldset>
        </form>
      </div>
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
