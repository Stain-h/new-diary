import React from 'react'
import { RiEmotionLaughLine, RiEmotionLine, RiEmotionNormalLine, RiEmotionSadLine, RiEmotionUnhappyLine } from 'react-icons/ri'

export default function NewDiaryLayer({ styles, onModalClick }) {
  return (
    <div className={styles.layer} onClick={onModalClick}>
      <div div className={styles.inner}>
        <strong className={styles.layer_title}>New Diary</strong>
        <form action="#" className={styles.form}>
          <fieldset>
            <div className={styles.emotions}>
              <label htmlFor="">오늘의 기분</label>
              <ul className={styles.emotionlist}>
                <li>
                  <input type="radio" name="emotion" id="emotion1" />
                  <label htmlFor="emotion1"><RiEmotionLaughLine />기쁨</label>
                </li>
                <li>
                  <input type="radio" name="emotion" id="emotion2" />
                  <label htmlFor="emotion2"><RiEmotionLine />좋음</label>
                </li>
                <li>
                  <input type="radio" name="emotion" id="emotion3" />
                  <label htmlFor="emotion3"><RiEmotionNormalLine />보통</label>
                </li>
                <li>
                  <input type="radio" name="emotion" id="emotion4" />
                  <label htmlFor="emotion4"><RiEmotionSadLine />슬픔</label>
                </li>
                <li>
                  <input type="radio" name="emotion" id="emotion5" />
                  <label htmlFor="emotion5"><RiEmotionUnhappyLine />화남</label>
                </li>
              </ul>
            </div>
            <div>
              <label htmlFor="textArea">일기쓰기</label>
              <textarea name="" id="textArea" cols="30" rows="10" resize="none" className={styles.textarea}></textarea>
            </div>
            <div className={styles.taglist}>
              <span>#오늘의일기</span>
              <input type="text" />
              <span>#오늘의일기</span>
              <span>#오늘의일기</span>
              <span>#오늘의일기</span>
              <button>+ Add</button>
            </div>
            <button type="submit" className={styles.submit}>작성하기</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
