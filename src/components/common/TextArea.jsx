import React from 'react';

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
        style={style.textarea}
        placeholder="일기를 입력하세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </div>
  );
}

const style = {
  textarea: {
    width: '100%',
    padding: '12px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    outline: 'none',
    resize: 'none',
  },
};
